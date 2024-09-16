import ButtonNavbar from "./ButtonNavbar";
import "../../scss/components/_Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Context";

export default function Navbar(){

    const {menuHamburguer, menuClose, menu} = useContext(Context);

    return(
        <>
            <header className="Navbar">
                <Link to={"/"}>
                    <button className="MissHilary">Miss <br/><span id="Hilary">Hilary</span></button>
                </Link>
                <button className="menuHamburguer" onClick={menuHamburguer}>
                    <img src="/img/imagenMenu1.svg" alt="Menu Hamburguesa"/>
                </button>
                <nav className={`NavbarCenter ${menu ? "open" : ""}`}>
                    <ButtonNavbar nombre = "INICIO" link="/" menuClose = {menuClose}/>
                    <ButtonNavbar nombre = "SOBRE MI" link="/Sobre-Mi" menuClose = {menuClose}/>
                    <ButtonNavbar nombre = "RECURSOS" link="/Recursos" menuClose = {menuClose}/>
                    <ButtonNavbar nombre = "SERVICIOS" link="/Servicios" menuClose = {menuClose}/>
                    <ButtonNavbar nombre = "CONTACTO" link="/Contacto" menuClose = {menuClose}/>
                </nav>
            </header>
        </>
    );
}