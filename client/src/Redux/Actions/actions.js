//imports
import axios from 'axios';
import { GET_BREEDS,
         GET_BREED,
         GET_FILTER_TEMPERAMENTS,
         ORDER_BY_NAME,
         ORDER_BY_WEIGHT,
         GET_TEMPERAMENTS
        } from "./actions_type";

//codigo

export function getBreeds(){
    return function (dispatch){
        return axios
        .get('http://localhost:3001/dogs')
        .then((response) => {
            dispatch({
                type: GET_BREEDS,
                payload: response.data
            })
        })
    }
}

export function getBreed (name){
    return function(dispatch){
        return axios
        .get (`https://localhost:3001`)
        .then((response) => {
            dispatch({
                type: GET_BREED,
                payload: response.data
            })
        }) 
    }
}

export function getTemperaments(){
    return function (dispatch){
        let res = axios.get(`/temperament`)
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