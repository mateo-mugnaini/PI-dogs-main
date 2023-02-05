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
        {razas.length > 0 && razas.map (e => {
            const tempArray = []
            e.temperaments?.map(el => tempArray.push(el.nombre))
            return (
        <Card
            imagen = {e.image}
            nombre = {e.name}
            temperamento = {tempArray.length > 0 ? tempArray.join() : e.temperament }
            peso = {e.weight?.metric || e.peso}
            id = {e.id}
            />)
            }
        )}
        </div>
    )
}
