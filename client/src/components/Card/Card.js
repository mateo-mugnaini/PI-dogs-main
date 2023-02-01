//imports
import React from "react";
import '../Card/Card.css'


//codigo

export default function Card (props){
    return(
        <div className="container-razas">
            <div>
                <img src = {props.imagen?.url} className = 'imagenPerro' />
            </div>
            <div className="container-text-card">
            <div className="raza">
                <p> Raza: {props.nombre} </p>
            </div>
            <div className="temperamentos">
                <p>Temperamentos: {props.temperamento} </p>
            </div>
            <div className="peso">
                <p>Peso: {props.peso?.metric} kg</p>
            </div>
            </div>
        </div>
    )
}