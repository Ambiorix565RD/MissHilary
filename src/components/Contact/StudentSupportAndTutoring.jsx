import { useContext } from "react";
import { Context } from "../Context/Context";
import "../../scss/components/_Contact.scss";

export default function StudentSupportAndTutoring(){

    const {formInputs, handleinputs, handleConfirmEmailPage, handleConfirmEmailBlur} = useContext(Context);

    return(
        <>
             <div className="form-group mb-1">
                        <p>El <strong>pago</strong> del servicio y la <strong>coordinación</strong> de la cita se realizará vía <strong>correo</strong></p>
                        <label htmlFor="parentName">Nombre del padre/madre o tutor:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="parentName"
                                name="parentName"
                                value={formInputs.parentName}
                                onChange={handleinputs}
                                placeholder="Nombre del padre/madre o tutor:" 
                                required
                                autoComplete="name"
                            />
                        </div>
                        <div className="form-group mb-1">
                        <label htmlFor="familyName">Apellido del padre/madre o tutor:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="parentLastName"
                                name="parentLastName"
                                value={formInputs.parentLastName}
                                onChange={handleinputs}
                                placeholder="Apellido del padre/madre o tutor:"
                                required
                                autoComplete="familyName"
                            />
                        </div>
                        <div className="form-group mb-1">
                        <label htmlFor="childName">Nombre del niño/a:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="childName"
                                name="childName"
                                value={formInputs.childName}
                                onChange={handleinputs}
                                placeholder="Nombre del niño/a:" 
                                required
                                autoComplete="name"
                            />
                        </div>
                        <div className="form-group mb-1">
                        <label htmlFor="childAge">Edad del niño/a:</label>
                            <select
                                className="form-control"
                                type="tel"
                                id="childAge"
                                name="childAge"
                                value={formInputs.childAge}
                                onChange={handleinputs}
                                placeholder="Edad del niño/a"
                                required
                                autoComplete="bday"
                            >
                                <option value="" disabled>Selecciona la edad</option>
                                {Array.from({ length: 12 }, (_, i) => i + 4).map(age => (
                                    <option key={age} value={age}>{age}</option>
                                ))}
                            </select>
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