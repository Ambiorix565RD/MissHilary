import ImgServices from "./ImgServices";
import "../../scss/components/_Services.scss";


export default function Services(){

    return(
        <>
       
            <section className="Services">

                <div className="tituleServices">
                    <h1>¡CONOCE MIS SERVICIOS!</h1>
                    <img src="/img/shineIcon.png" alt="Shine Icon" />
                </div>
                
               
                <div className="ServicesTwo">
                    <ImgServices name="Acompañamiento" link="/Servicios/Acompañamiento" img="/img/studentSupport02.jpg"/>
                    <ImgServices name="Tutorías" link="/Servicios/Tutorías" img="/img/studentSupport.jpg"/>
                    <ImgServices name="Maestra" link="/Servicios/Maestra" img="/img/CategoryTeacher.jpg"/>
                    <div className="ServicesBackground"></div>
                </div>
            </section>
        
        </>
    )
}