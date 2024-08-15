import { useContext} from "react";
import PropTypes from "prop-types";
import Teacher from "./Teacher";
import  {Context}  from "../Context/Context";
import StudentSupportAndTutoring from "./StudentSupportAndTutoring";
import "../../scss/components/_Contact.scss";
import EmptyServices from "../Services/EmptyServices";

export default function Contact(){
    
    const {formInputs, selectedService, handleinputs, handleSubmit } = useContext(Context);

    if(selectedService === ""){
        
        return <EmptyServices/>
    }

    return(
        <>  
        <main className="mainForm">
            <div className="formContainer">
            <form onSubmit={handleSubmit}>
                    <div className="form">
                    <h2 >Formulario para coordinar cita</h2>

                    {selectedService === "Maestra" && (
                        <Teacher formInputs={formInputs} handleinputs={handleinputs}/>
                    )}
                    {selectedService === "Acompañamiento" &&(
                        <StudentSupportAndTutoring formInputs={formInputs} handleinputs={handleinputs}/>
                    )}
                    {selectedService === "Tutorías" && (
                        <StudentSupportAndTutoring formInputs = {formInputs} handleinputs ={handleinputs}/>
                    )}
                        <button className="btn btn-primary w-100 py-2" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </main>
        </> 
    )
}

Contact.propTypes = {
    servicesSelected: PropTypes.string,
}