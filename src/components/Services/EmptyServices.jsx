import { Link } from "react-router-dom";
import "../../scss/components/_Services.scss"

export default function EmptyServices(){

    return(
        <>
            <section className="sectionEmptyService">
                    <div className="EmptyService">
                        <h2>No ha seleccionado un servicio...😢</h2>
                        <Link to="/Servicios">
                            <button>Ver servicios</button>
                        </Link>
                    </div>
                </section>
        </>
    )
}