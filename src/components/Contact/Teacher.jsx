import { useContext } from "react"
import { Context } from "../Context/Context";
import "../../scss/components/_Contact.scss";

export default function Teacher(){

    const {formInputs, handleinputs, handleConfirmEmailPage, handleConfirmEmailBlur} = useContext(Context);
    
    return(
        <>
            <div className="form-group mb-1">
                        <div className="form-group mb-1">
                            <p>El <strong>pago</strong> del servicio y la <strong>coordinación</strong> de la cita se realizará vía <strong>correo</strong></p>
                        <label htmlFor="educationalCenter">Centro educativo:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="educationalCenter"
                                name="educationalCenter"
                                value={formInputs.educationalCenter}
                                onChange={handleinputs}
                                placeholder="Centro educativo"
                                required
                                autoComplete="educationalCenter"
                            />
                        </div>
                        <label htmlFor="teachersName">Nombre de profesor/a:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="teachersName"
                                name="teachersName"
                                value={formInputs.teachersName}
                                onChange={handleinputs}
                                placeholder="Nombre de profesor/a" 
                                required
                                autoComplete="teachersName"
                            />
                        </div>
                        <div className="form-group mb-1">
                        <label htmlFor="teachersLastName">Apellido de profesor/a:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="teachersLastName"
                                name="teachersLastName"
                                value={formInputs.teachersLastName}
                                onChange={handleinputs}
                                placeholder="Apellido de profesor/a"
                                required
                                autoComplete="teachersLastName"
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="selectedOption">Selecciona un curso:</label> 
                            <select
                                className="form-control"
                                id="selectedOption"
                                name="selectedOption"
                                value={formInputs.selectedOption}
                                onChange={handleinputs}
                                required
                                autoComplete="off"
                            >
                                <option value="" disabled>Selecciona un curso</option>
                                <option value="Kínder">Kínder</option>
                                <option value="Pre-Primario">Pre-Primario</option>
                                <option value="Nivel primario | Primer Grado">Nivel primario | Primer Grado</option>
                                <option value="Nivel primario | Segundo Grado">Nivel primario | Segundo Grado</option>
                                <option value="Nivel primario | Tercer Grado">Nivel primario | Tercer Grado</option>
                                <option value="Nivel primario | Cuarto Grado">Nivel primario | Cuarto Grado</option>
                                <option value="Nivel primario | Quinto Grado">Nivel primario | Quinto Grado</option>
                                <option value="Nivel primario | Sexto Grado">Nivel primario | Sexto Grado</option>
                                <option value="Nivel secundario | Primer Grado">Nivel secundario | Primer Grado</option>
                                <option value="Nivel secundario | Segundo Grado">Nivel secundario | Segundo Grado</option>
                                <option value="Nivel secundario | Tercer Grado">Nivel secundario | Tercer Grado</option>
                            </select>
                        </div>
                        <div className="form-group mb-1">
                        <label htmlFor="subject">Asignatura:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="subject"
                                name="subject"
                                value={formInputs.subject}
                                onChange={handleinputs}
                                placeholder="Asignatura"
                                required
                                autoComplete="subject"
                            />
                        </div>
                        <div className="form-group mb-1">
                        <label htmlFor="topic">Tema:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="topic"
                                name="topic"
                                value={formInputs.topic}
                                onChange={handleinputs}
                                placeholder="Tema"
                                required
                                autoComplete="topic"
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="phone">Teléfono o celular:</label>
                            <input
                                className="form-control"
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formInputs.phone}
                                onChange={handleinputs}
                                placeholder="849-123-4567"
                                required
                                autoComplete="tel-national"
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="email">Correo:</label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                value={formInputs.email}
                                onChange={handleinputs}
                                placeholder="correo@correo.com"
                                required
                                autoComplete="email"
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="confirmEmail">Confirmar Correo:</label>
                            <input
                                className="form-control"
                                type="email"
                                id="confirmEmail"
                                name="confirmEmail"
                                value={formInputs.confirmEmail}
                                onChange={handleinputs}
                                onBlur={handleConfirmEmailBlur}
                                onPaste={handleConfirmEmailPage}
                                placeholder="Confirme su correo"
                                required
                                autoComplete="email"
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="service">Servicio Seleccionado:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="service"
                                name="service"
                                value={formInputs.service}
                                onChange={handleinputs}
                                placeholder="Servicio Seleccionado"
                                readOnly
                                autoComplete="email"
                            />
                        </div>
        </>
    )
}
