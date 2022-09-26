import { useRef } from "react";
import "./curso.css"
import imagen from "./auth.png"

function Curso ({ titulo, subtitulo}){
    const miReferencia = useRef()

    const clickFunctionDesactivar = () => {
        console.log(miReferencia.current);
        miReferencia.current.classList.add('desactivada');
    }

    const clickFunctionActivar = () => {
        console.log(miReferencia.current);
        miReferencia.current.classList.remove('desactivada');
    }
    return (
        <div>
            <img ref={miReferencia} src={imagen} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
        <button onClick={clickFunctionDesactivar}>Desactivar</button>
        <button onClick={clickFunctionActivar}>Activar</button>
        </div>
    )
}

export default Curso;