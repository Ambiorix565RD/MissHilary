import { useEffect, useState } from "react"
import "../../scss/components/_Services.scss"
import { getServices } from "../../../pdf";
import { useParams } from "react-router-dom";
import CardServices from "./CardServices";
import Loading from "../Loading/Loading";

export default function CategoryServices(){

    const [services, setServices] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const timeout = setTimeout(() =>{
            getServices.then((data) => setServices(data)); 
            setLoading(false);

        }, 1000)
        
        return () => clearTimeout(timeout);

    }, [])

    if(loading){
        return <Loading/>
    }


    return(
        <>
            <div>
                {services
                .filter((service) => service.category === id)
                .map((service) =>(
                    <CardServices
                        key={service.id}
                        title = {service.title}
                        img = {service.img}
                        description = {service.description}
                    />
                ))}
            </div>
        
        </>
    )
}