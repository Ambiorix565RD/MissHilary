import "../../scss/components/_AboutMe.scss";

export default function AboutMe(){

    return(
        <>
            <section className="AboutMe">
                <div className="AboutMeImages">
                    <div>
                        <img src="/img/missHilary02.jpeg" alt="Foto MissHilary" />
                    </div>
                    <img className="backgroundImage"src="/img/background2.png" alt="Background" />
                </div>
                
                <div className="AboutMeTwo">
                    <div className="AboutMeTitle">
                        <h1>
                            Hola! <br/> Soy Miss Hilary!
                        </h1>
                        <img src="/img/shineIcon.png" alt="Shine Icon" />
                    </div>
                    <div className="AboutMeArrows">
                        <img src="/img/arrowLeftIcon.png" alt="Arrow Icon" />
                        <img src="/img/arrowRightIcon.png" alt="Arrow Icon" />
                    </div>
                    <section className="AboutMeThree">   
                        <div className="AboutMeText">
                            <div>
                                <p>
                                    Mi nombre es Hilary Pérez soy una joven educadora dominicana y creyente en la fe en Dios a través de Jesucristo. Tengo más de cinco años trabajando en el sector educativo en los grados de kinder hasta sexto de secundaria, empecé trabajando en mi primer año como maestra acompañante de una niña con Déficit de Atención e Hiperactividad (TDAH), un tiempo después perfeccioné mis conocimientos del idioma inglés y comencé a trabajar como maestra asistente de inglés en los cursos de séptimo de básica hasta tercero de secundaria, más adelante me hicieron maestra titular de inglés para el primer ciclo y segundo ciclo de secundaria y actualmente trabajo como maestra de inglés también en el área de primaria. Amo la música, el arte la cocina y la lectura de novelas literarias, me apasiona ayudar a niños con necesidades especiales y disfruto enseñar porque a través de la enseñanza yo aprendo cada día más; espero que nos podamos conocer más a través de mi página.
                                    <br/>¡Bendiciones! 
                                </p>
                            </div>
                        </div>
                        <div className="AboutMeSkills">
                            <h2>Mis aficciones</h2>
                            <div>
                                <img className="AboutMeSkillsImage" src="/img/NoteIconTwo.png" alt="Note Icon" />
                            </div>
                            <div className="AboutMeSkillsTwo">
                                <div className="AboutMeSkillsThree">
                                    <img src="/img/checkIcon.png" alt="Check Icon" />
                                    <h3>Enseñar</h3>
                                </div>
                                <div className="AboutMeSkillsThree">
                                    <img src="/img/checkIcon.png" alt="Check Icon" />
                                    <h3>Música</h3>
                                </div>
                                <div className="AboutMeSkillsThree">
                                    <img src="/img/checkIcon.png" alt="Check Icon" />
                                    <h3>Cocinar</h3>
                                </div>
                            </div>
                        </div>
                    </section> 
                </div>
            </section>
        </>
    )
}