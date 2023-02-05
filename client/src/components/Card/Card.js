//imports
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../Card/Card.css'


//codigo

export default function Card (props){

    return(
        <div className="container-razas">
            <div className="card">
                <Link to={`/detalle/${props.id}`}>
            <div className="img-card">
                <img src = {props.imagen?.url} className = 'imagenPerro' />
            </div>
            </Link>
            <div className="container-text-card">
            <div className="raza">
                <p> Raza: {props.nombre} </p>
            </div>
            <div className="temperamentos">
                <p>Temperamentos: {props.temperamento} </p>
            </div>
            <div className="peso">
                <p className="text-peso">Peso: {props.peso} kg</p>
            </div>
            </div>
            </div>
        </div>
    )
}