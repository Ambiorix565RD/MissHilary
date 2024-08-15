import { TailSpin } from "react-loader-spinner";
import "../../scss/components/_Loading.scss"

export default function Loading(){

    return(
        <>
        <section className="sectionSpinner">
            <div className="Spinner">
                <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#db8e6d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </section>
        </>
    )
}