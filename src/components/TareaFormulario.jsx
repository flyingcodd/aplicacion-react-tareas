import React from "react";
import '../stylesheets/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
    const [input, setInput] = React.useState("");
    const menejarCambio = e =>{
        setInput(e.target.value);
    };
    const menejarEnvio = e =>{
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }
    return (
        <form onSubmit={menejarEnvio} className="tarea-formulario">
            <input onChange={menejarCambio} className="tarea-input" type="text" placeholder="Escribe una tarea" name="texto" />
            <button className="tarea-boton">Agregar tarea</button>
        </form>
    );
}

export default TareaFormulario;