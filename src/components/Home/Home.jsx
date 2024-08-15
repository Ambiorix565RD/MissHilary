import "../../scss/components/_Home.scss";
import {motion} from "framer-motion";

export default function Home(){
    const text = "BIENVENIDO/A A MI PÁGINA!\nAQUÍ ENCONTRARÁS RECURSOS EDUCATIVOS PARA TUS PEQUES Y CONOCERÁS MIS SERVICIOS DE TUTORÍAS Y ACOMPAÑAMIENTO PEDAGÓGICO, ¿ESTÁS LISTO/A?";
    const textArray= text.split("");
    return(
        <>
            <section className="Home">
                <div className="imgMissHilary">
                    <img className="imgMissHilary01" src="/img/missHilary01.png" alt="foto MissHilary" />
                    <motion.p>
                        {textArray.map((letter, index) => (
                            <motion.span key={index} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.05, delay: index * 0.04,}}>
                                {letter}
                            </motion.span>
                        ))}
                    </motion.p>
                    <div className="shineIcon">
                        <img src="/img/shineIcon.png" alt="shine Icon" />
                    </div>
                </div>
                <div className="MisshilaryPhrase">
                    <p>“Sembrad en los niños ideas buenas, aunque no las entiendan; los años se encargarán de descifrarlas en su<br/> entendimiento y de hacerlas florecer en su corazón.”</p>
                    <p className="montesorriFont">MARIA MONTESSORI</p>
                    <div className="icons">
                        <a href="https://www.instagram.com/hilarynagely?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><img src="/img/instagramIcon.png" alt="Tiktok Icon" /></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hilarynagely21@gmail.com&su=Consulta" target="_blank" rel="noopener noreferrer"><img src="/img/emailIcon.png" alt="Email Icon" /></a>
                    </div>
                </div>
            </section>
        </>
    )
}