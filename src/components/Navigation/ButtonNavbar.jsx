import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../scss/components/_ButtonNavbar.scss"
import { useContext } from "react";
import { Context } from "../Context/Context";

export default function ButtonNavbar({nombre, link}){

    const {menuClose} = useContext(Context)

    return(
        <Link to={link} onClick={menuClose}>
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