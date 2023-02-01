//imports
import React from "react";
import Card from "../Card/Card";
import '../Cards/Cards.css'
import { useSelector } from 'react-redux';


//codigo

export default function Cards (){
    const razas = useSelector(state => state.breeds)

    return(
        <div className="container-cards">
        {razas.length > 1 && razas.map (e => 
        <Card
            imagen = {e.image}
            nombre = {e.name}
            temperamento = {e.temperament}
            peso = {e.weight}
            />)}
            </div>
    )
}
