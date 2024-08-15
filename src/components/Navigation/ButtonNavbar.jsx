import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../scss/components/_ButtonNavbar.scss"

export default function ButtonNavbar({nombre, link}){

    return(
        <Link to={link}>
            <button className='buttonNavbar'>
                {nombre}
            </button>
        </Link>
    );
}

ButtonNavbar.propTypes = {
    nombre: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}