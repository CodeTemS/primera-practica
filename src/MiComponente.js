import React from "react";
import { SegundoComponente } from "./SegundoComponente";



const MiComponente = () =>{

    const fichaMedica ={
        salud : "buena",
        sangre : "A+"        
    }

    let peliculas = ["Transformers","kung fu panda", "hangover"]
    return(
        <div className="MiComponente">
            <h1>Listado de peliculas</h1>
            {
                peliculas.length >= 1 ? (
                    <ul>
                        {
                            peliculas.map((pelicula,indice)=>{
                                return (<li key={indice}>{pelicula}</li>)
                            })
                        }
                    </ul>
                    )
                
                :(
                    <p>No hay peliculas</p>
                )
            
            }
            <SegundoComponente 
            nombre="Fernando"
            apellido="Montoya"
            ficha = {fichaMedica}
             />
        </div>   
    )
    
}

export default MiComponente;