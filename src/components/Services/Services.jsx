import ImgServices from "./ImgServices";
import {motion} from "framer-motion";
import "../../scss/components/_Services.scss";
import { useContext } from "react";
import { Context } from "../Context/Context";


export default function Services(){

    const {servicesVariant} = useContext(Context);


    return(
        <>
       
            <section className="Services">

                <div className="tituleServices">
                    <h1>¡CONOCE MIS SERVICIOS!</h1>
                    <img src="/img/shineIcon.png" alt="Shine Icon" />
                </div>
                
               
                <div className="ServicesTwo">
                    {
                        [{ name:"Acompañamiento", link:"/Servicios/Acompañamiento", img:"/img/studentSupport02.jpg"},
                        { name:"Tutorías", link:"/Servicios/Tutorías", img:"/img/studentSupport.jpg"},
                        { name:"Maestra", link:"/Servicios/Maestra", img:"/img/CategoryTeacher.jpg"}]
                        .map((service, index) => (
                            <motion.div key={service.name} custom={index} variants={servicesVariant} initial="hidden" animate="visible">
                                <ImgServices name={service.name} link={service.link} img={service.img}/>
                            </motion.div>
                        ))
                    }

                    <div className="ServicesBackground"></div>
                </div>
            </section>
        </>
    )
}