import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/components/_Services.scss";
import {motion} from "framer-motion";

export default function CardServices({img, title, description}){

    const navigate = useNavigate(); // Permite el uso de la navegacion programática y el estado para pasar informacion al mismo tiempo

    const handleService = () => {
        navigate("/Contacto", {state: {service: title} });
    }

    const animationDescription = description.split ("");


    return(
        <>
        <section className="CardServices">
            <div className="CardServicesTwo">
                <div>
                    <img className="CardServicesImg" src={img} alt={title}/>
                </div>
                <img className="CardServicesImgTwo" src="/img/background2.png" alt="Background" />
            </div>
            <div className="CardServicesThree">
                           
                <motion.h1 >
                    {title}
                </motion.h1>
                <motion.p >
                    {animationDescription.map ((lettler, index) =>(

                        <motion.span key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: index * 0.02}}>
                            {lettler}
                        </motion.span>

                    ))}
                    
                </motion.p>
                <button onClick={handleService}><img src="/img/IconCalendar.png" alt="Calendar" /></button>
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