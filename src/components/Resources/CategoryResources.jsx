import { useEffect, useState } from "react";
import "../../scss/components/_Resources.scss";
import { getBackground, getFiles, getTitles } from "../../../pdf";
import { useParams } from "react-router-dom";
import CardResources from "./CardResources";
import Loading from "../Loading/Loading";

export default function CategoryResources(){
    const [files, setfiles] = useState([]);
    const [title, setTitle] = useState ("");
    const [background, setBackground] = useState("");
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() =>{
            getFiles.then((data) => setfiles(data));
            setTitle(getTitles(id))
            setBackground(getBackground(id))
            setLoading(false);
        }, 1000)
        
        return () => clearTimeout(timeout);

    }, [id])

    if(loading){
        
        return <Loading/>
    }

    return(
        <>
        <section className="ResourcesBackgrounds" style={{backgroundImage: `url(${background})`}}>
            <div className="CardResourcesContent">
                <div className="CardResourcesTitle">
                    <h1>{title}</h1>
                </div>

                <div className="CategoryResources">
                    {files
                    .filter((file) => file.category === id)
                    .map((file, index) =>(
                        <CardResources
                            key={file.id}
                            name = {file.name}
                            img ={file.img}
                            title ={file.title}
                            url={file.url}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}