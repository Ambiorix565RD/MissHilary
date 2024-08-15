import ButtonNavbar from "./ButtonNavbar";
import "../../scss/components/_Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar(){

    return(
        <>
            <header className="Navbar">
                <Link to={"/"}>
                    <button className="MissHilary">Miss <br/><span id="Hilary">Hilary</span></button>
                </Link>
                <nav className="NavbarCenter">
                    <ButtonNavbar nombre = "INICIO" link="/"/>
                    <ButtonNavbar nombre = "SOBRE MI" link="/Sobre-Mi"/>
                    <ButtonNavbar nombre = "RECURSOS" link="/Recursos"/>
                    <ButtonNavbar nombre = "SERVICIOS" link="/Servicios"/>
                    <ButtonNavbar nombre = "CONTACTO" link="/Contacto"/>
                </nav>
            </header>
        </>
    );
}