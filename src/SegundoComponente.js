import React from "react";

export const SegundoComponente = ({nombre, apellido, ficha}) =>{

    
    return(
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>Grupo Sanguineo: {ficha.sangre}</li>
        </ul>
    )

}