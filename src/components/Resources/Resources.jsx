import ImgResources from "./ImgResources";
import "../../scss/components/_Resources.scss";

export default function Resources(){
   
    return(
        <>
            <section className="Resources">

                <div className="tituleResources">
                    <h1>¡Aquí encontrarás recursos para tus peques!</h1>
                    <img src="/img/shineIcon.png" alt="Shine Icon" />
                </div>
                
               
                <div className="pdfResources">
                    <ImgResources name="Leer" link="/Recursos/Leer"/>
                    <ImgResources name="Trazar" link="/Recursos/Trazar"/>
                    <ImgResources name="Colorear" link="/Recursos/Colorear"/>
                    <div className="ResourcesBackground"></div>
                </div>
            </section>
        </>
    )
}