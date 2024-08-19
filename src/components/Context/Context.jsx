import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2';
import PropTypes from "prop-types";
import emailjs from "emailjs-com";


export const Context = createContext(false);

export default function ContextProvider({children, servicesSelected}){
    const location = useLocation();
    const selectedService =  location.state?.service || "";
    const [formInputs, setFormInputs] = useState({ parentName:"", parentLastName:"", childName:"", childAge:"4", phone:"", selectedOption:"",  email:"", confirmEmail:"", service: selectedService ||"", educationalCenter:"", teachersName:"", teachersLastName:"", subject:"", topic:""});

    useEffect(() => {
        if(selectedService){
            console.log("Servicio seleccionado:", selectedService);
            setFormInputs((prevState) => ({
                ...prevState, service: selectedService
            }))
        }
        
    }, [selectedService]);

     //Manejo de los inputs
     const handleinputs = (e) => {
        const {name, value} = e.target;

        // manejo del campo telefono o celular para aplicar guiones automaticamente a medida el cliente va llenando el campo telefono o celular y no pueda colocar letras.
        if(name === "phone"){
            
            const numericValue = value.replace(/\D/g, "");

            let formattedValue = numericValue;
            if(numericValue.length > 3){
                formattedValue = `${numericValue.slice(0,3)}-${numericValue.slice(3)}`;
            }

            if(numericValue.length > 6){
                formattedValue = `${numericValue.slice(0,3)}-${numericValue.slice(3,6)}-${numericValue.slice(6, 10)}`;
            }

            setFormInputs({
                ...formInputs, [name]: formattedValue
            });

            //Limitar la cantidad de numeros que puede introducir para que sea de acuerdo al formato del pais.
            if(numericValue.length > 10){
                formattedValue = formattedValue.slice(0,12);
            }

        } else if (name === "parentName" || name === "parentLastName" || name === "childName"){

            //validar que no ingresen numero en el campo de name y lastName

            const onlyLetters = /^[a-zA-Z\s]*$/;
            if(onlyLetters.test(value)) {
                setFormInputs({
                    ...formInputs, [name]: value
                });
            }
        } else if(name === "childAge"){
            const numericValue = value.replace(/\D/g, "");
            setFormInputs({
                ...formInputs, [name]: numericValue
            })

        }else {

            setFormInputs({
                ...formInputs, [name]: value
            });
        }
    };

    const validatePhone = (phone) => {
        const number = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        return number.test(phone);
    }

    const handleConfirmEmailBlur = () => {
        if (formInputs.email !== formInputs.confirmEmail){
            Swal.fire({
                title: "¡Los correos no coinciden!",
                icon: 'error',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'OK'
            })
            return;
        } 
    }

    //prevenir que copie y pegue el email en confirmEmail
    const handleConfirmEmailPage = (e) => {
        e.preventDefault();
        return false;
    }

     //Manejo del envio del formulario a firebase
     const handleSubmit = async (e) => {
        e.preventDefault();
        //validaciones de los campos
        if(formInputs.service === "Maestra"){
            if(!formInputs.educationalCenter || !formInputs.teachersName || !formInputs.teachersLastName || !formInputs.selectedOption || !formInputs.subject || !formInputs.topic || !formInputs.phone || !formInputs.email || !formInputs.confirmEmail ){
                
                Swal.fire({
                    title: "¡Favor de llenar todos los campos!",
                    icon: 'error',
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: 'OK'
                })
                return;
            }
        } else if(formInputs.service === "Acompañamiento" || formInputs.service === "Tutorías"){

            if(!formInputs.parentName || !formInputs.parentLastName ||!formInputs.childName || !formInputs.childAge || !formInputs.selectedOption || !formInputs.phone || !formInputs.email || !formInputs.confirmEmail ){
                
                Swal.fire({
                    title: "¡Favor de llenar todos los campos!",
                    icon: 'error',
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: 'OK'
                })
                return;
            }
        }
        

        if(!validatePhone (formInputs.phone)){
            Swal.fire({
                title: "¡Favor colocar un número de teléfono válido!",
                icon: 'error',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'OK'
            })

            return;
        }

        //Validar que se concuerden los campos email y la confirmacion del email
        
        if (formInputs.email !== formInputs.confirmEmail){
            Swal.fire({
                title: "¡Los correos no coinciden!",
                icon: 'error',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'OK'
            })
            return
        } 

        let templateId = "";

        if (formInputs.service === "Maestra"){
            templateId = "template_k1f3o8l"; 
        } else if (formInputs.service === "Acompañamiento"){
            templateId = "template_5ce3tcw";
        } else if (formInputs.service === "Tutorías"){
            templateId = "template_5ce3tcw";
        }

        const templateParams = {
            parentName: formInputs.parentName,
            parentLastName: formInputs.parentLastName,
            childName:formInputs.childName,
            childAge: formInputs.childAge,
            phone: formInputs.phone,
            selectedOption: formInputs.selectedOption,
            email: formInputs.email,
            service: formInputs.service,
            educationalCenter: formInputs.educationalCenter,
            teachersName: formInputs.teachersName,
            teachersLastName: formInputs.teachersLastName,
            subject: formInputs.subject,
            topic: formInputs.topic,
        };

        emailjs.send(
            "service_80y60wz", //Service ID
            templateId, // Template ID
            templateParams,
            "TkDJRB2meZZPwlYtt" // USER ID
        ).then((result) =>{
            console.log(result.text);
            Swal.fire({
                title: "¡Formulario enviado con éxito!",
                text: "Le estaremos respondiendo de 1 a 2 días laborables para coordinar cita.¡Muchas gracias!",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {

                    // Redirigir a la página principal
                    window.location.href = "/";
                }
            });
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                title: "¡Error al enviar formulario!",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK"
            })
        });
            
        
        //Restablecer el formulario después del envío exitoso
        setFormInputs({ 
            parentName:"", 
            parentLastName:"", 
            childName:"", 
            childAge:"4", 
            phone:"", 
            selectedOption:"",  
            email:"", 
            confirmEmail:"", 
            service: servicesSelected, 
            educationalCenter: "",
            teachersName:"",
            teachersLastName:"",
            subject:"",
            topic:"",
        });

    }

    //Para las animaciones
    const resourcesVariant =  {
        hidden: {opacity: 0, x: 100},
        visible: (index) => ({
            opacity: 1,
            x:0,
            transition: {
                delay: index * 0.3,
                duration: 0.9,
                ease: "easeInOut",
            }
        })
    }

    const servicesVariant = {
        hidden: {opacity: 0, x: 100},
        visible: (index) => ({
            opacity: 1,
            x:0,
            transition: {
                delay: index * 0.3,
                duration: 0.9,
                ease: "easeInOut",
            }
        })
    }

    return(
        <Context.Provider value={{formInputs, setFormInputs, selectedService, handleinputs, validatePhone, handleConfirmEmailBlur, handleConfirmEmailPage, handleSubmit, resourcesVariant, servicesVariant}}>
            {children}
        </Context.Provider>
    );
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    servicesSelected: PropTypes.string.isRequired,
}