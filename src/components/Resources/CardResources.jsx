import "../../scss/components/_Resources.scss";
import PropTypes from "prop-types"

export default function CardResources({img, name, url}){
   

    return(
        <>
            
            <div className="CardResources">
                <img src={img} alt={name} />
                <p>{name}</p>
                <a href={url} download>
                    <button>Descargar</button>
                </a>
                
            </div>
        </>
    )
}

CardResources.propTypes ={
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}