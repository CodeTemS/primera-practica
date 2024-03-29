import React from "react";

let name = "";

export const SegundoComponente = ({
                                nombre, 
                                apellido, 
                                ficha
                                }) => {

    const darClick = (e, name) => {
        name = prompt("Cual es tu nombre");
        alert(name+" Has dado click");
    }
    

    
    return(
        <div>
            <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>Estado de Salud: <strong>{ficha.salud}</strong></li>
            <li>Grupo Sanguineo: <strong>{ficha.sangre}</strong></li>
        </ul>
        <button onClick={e=> darClick(e,name)}>Dame click</button>
        </div>
    )

}