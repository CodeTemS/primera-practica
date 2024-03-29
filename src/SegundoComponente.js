import React from "react";

export const SegundoComponente = ({nombre, apellido, ficha}) =>{

    
    return(
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>Estado de Salud: <strong>{ficha.salud}</strong></li>
            <li>Grupo Sanguineo: <strong>{ficha.sangre}</strong></li>
        </ul>
    )

}