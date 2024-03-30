import React, {useState} from "react";


export const MiPrimerEstado = () =>{

    const [nombre, setNombre] = useState('Cristo Montoya');

    const Cambiar = e =>{
        let nuevo = prompt('Seleccione un Nuevo Nombre: ');
        setNombre(nuevo);
    }
    return(
        <div>
            <h1>{nombre}</h1>
            <button onClick={Cambiar}>Cambiar</button>
        </div>
    );
}