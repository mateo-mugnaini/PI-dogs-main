//imports
import axios from 'axios';
import { GET_BREEDS,
         GET_BREED,
         GET_FILTER_TEMPERAMENTS,
         ORDER_BY_NAME,
         ORDER_BY_WEIGHT,
         GET_TEMPERAMENTS,
         GET_DETAIL
        } from "./actions_type";

//codigo

export function getBreeds(){
    return async function (dispatch){
        const response = await axios
            .get('http://localhost:3001/dogs');
        dispatch({
            type: GET_BREEDS,
            payload: response.data
        });
    }
}

export function getBreed(name){
    return async function (dispatch){
        console.log('LLEGO AL DISPatch')
        const response = await axios
            .get(`http://localhost:3001/dogs?name=${name}`);

        console.log(response.data, 'response')
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
        let res = await axios.get(`http://localhost:3001/temperament`)
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: res.data
        })
    }
}

export function filterByTemperament(payload){
    return {
        type: GET_FILTER_TEMPERAMENTS,
        payload
    }
}

export function orderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByWeight(payload){
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}