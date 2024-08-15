import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/components/_Services.scss";


export default function ImgServices({link, name, img}){


    return(
        <>
            <div className="ImgServices">
                <Link to={link}>
                    <img src={img} alt="Images" />
                    <button>{name}</button>
                </Link>
            </div>
        </>
    )
}

ImgServices.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}