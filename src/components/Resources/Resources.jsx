import ImgResources from "./ImgResources";
import "../../scss/components/_Resources.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Context } from "../Context/Context";

export default function Resources(){

    const {resourcesVariant} = useContext(Context)

   
    return(
        <>
            <section className="Resources">

                <div className="tituleResources">
                    <h1>¡Aquí encontrarás recursos para tus peques!</h1>
                    <img src="/img/shineIcon.png" alt="Shine Icon" />
                </div>
                
               
                <div className="pdfResources">
                    {[{ name:"Leer", link:"/Recursos/Leer"},
                    { name:"Trazar", link:"/Recursos/Trazar"},
                    { name:"Colorear", link:"/Recursos/Colorear"}]
                    .map((resource, index) => (
                        <motion.div key={resource.name} custom={index} variants={resourcesVariant} initial="hidden" animate="visible">
                            <ImgResources name={resource.name} link={resource.link}/>
                        </motion.div>
                    ))
                    }
                    <div className="ResourcesBackground"></div>
                </div>
            </section>
        </>
    )
}