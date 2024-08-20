import { useContext } from "react";
import PropTypes from "prop-types"
import { Context } from "../Context/Context";
import { motion } from "framer-motion";
import "../../scss/components/_Resources.scss";

export default function CardResources({img, name, url, index}){
   
    const {resourcesVariant} = useContext(Context)

    return(
        <>
            
            <motion.div className="CardResources" variants={resourcesVariant} initial="hidden" animate="visible" custom={index}>
                <img src={img} alt={name}/>
                <p>{name}</p>
                <a href={url} download>
                    <button>Descargar</button>
                </a>
            </motion.div>
        </>
    )
}

CardResources.propTypes ={
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
}