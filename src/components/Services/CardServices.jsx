import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/components/_Services.scss";
import {motion, useAnimation} from "framer-motion";
import { useEffect } from "react";

export default function CardServices({img, title, description}){

    const navigate = useNavigate(); // Permite el uso de la navegacion programática y el estado para pasar informacion al mismo tiempo

    const handleService = () => {
        navigate("/Contacto", {state: {service: title} });
    }

    const animationDescription = description.split ("");

    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            controls.start({
                x: [0, -5, 5, -5, 5, 0],
                y: [0, -5, 5, -5, 5, 0], //para el movimiento de vibración
                transition: {duration: 0.5, ease: "easeInOut"},
            });

        }, 5000);

        return () => clearInterval(interval); //Limpiar el interval cuando el componente se desmonte
    }, [controls])

    return(
        <>
        <section className="CardServices">
            <div className="CardServicesTwo">
                <div>
                    <motion.img className="CardServicesImg" src={img} alt={title} initial={{opacity:0, y:20 }} animate={{opacity: 1 , y:0 }} transition={{duration:0.9, ease: "easeInOut"}}/>
                </div>
                <img className="CardServicesImgTwo" src="/img/background2.png" alt="Background" />
            </div>
            <div className="CardServicesThree">
                           
                <motion.h1 >
                    {title}
                </motion.h1>
                <motion.p >
                    {animationDescription.map ((lettler, index) =>(

                        <motion.span key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: index * 0.01}}>
                            {lettler}
                        </motion.span>

                    ))}
                </motion.p>
                <motion.button onClick={handleService} animate={controls}><img src="/img/IconCalendar.png" alt="Calendar" /></motion.button>
            </div>
        </section>
        </>
    )
}

CardServices.propTypes = {
    
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}