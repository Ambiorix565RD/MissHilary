import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../scss/components/_Resources.scss"

export default function ImgResources({name, link}){

    return(
        <div className="imgResources">
            <Link to={link}>
                <img src="/img/pdfIcon.png" alt="PDF Icon" />
                <button>{name}</button>
            </Link>
        </div>
    );
}

ImgResources.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}