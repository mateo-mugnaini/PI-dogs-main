//imports
import axios from 'axios';
import { GET_BREEDS,
         GET_BREED,
         GET_TEMPERAMENTS,
         GET_DETAIL,
         ORDER_BY_NAME,
         ORDER_BY_WEIGHT
        } from "./actions_type";

//codigo

// ----------------------------------------------- GETS -----------------------------------------------//

export function getBreeds(type = 'All'){ 
    console.log(type)
    return async function (dispatch){
        const response = await axios
            .get(`http://localhost:3001/dogs?type=${type}`);
        dispatch({
            type: GET_BREEDS,
            payload: response.data
        });
    }
}

export function getBreed(name, type){
    return async function (dispatch){
        const response = await axios
            .get(`http://localhost:3001/dogs?name=${name}&type=${type}`);
        dispatch({
            type: GET_BREED,
            payload: response.data
        });
    }
}

export function getDetail (idRaza){
    return async function(dispatch){
        const response = await axios
            .get(`http://localhost:3001/dogs/${idRaza}`);
        dispatch({
            type: GET_DETAIL,
            payload: response.data
        }); 
    }
}

export function getTemperaments(){
    return async function (dispatch){
        let response = await axios.get(`http://localhost:3001/temperament`)
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: response.data
        })
    }
}

// ----------------------------------------------- FILTROS -----------------------------------------------//


// Filtro Alfabetico --> A - Z || Z - A
export function orderByName(modo){ 
        return function(dispatch){
            dispatch({
                type: ORDER_BY_NAME,
                payload: modo
            })
        }
}

// Filtro por Temperamento 

export function filterByTemperaments(tempName, type){
    return async function (dispatch){

        const response = await axios
            .get(`http://localhost:3001/dogs?tempName=${tempName}&type=${type}`);
        dispatch({
            type: GET_BREEDS,
            payload: response.data
        });
    }
}


// Filtro por Peso

export function orderByWeight(modo){
    return function(dispatch){
        dispatch({
            type: ORDER_BY_WEIGHT,
            payload: modo
        })
    }
}