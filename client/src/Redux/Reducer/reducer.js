//import
import { GET_BREEDS,
    GET_BREED,
    GET_TEMPERAMENTS,
    GET_FILTER_TEMPERAMENTS,
    ORDER_BY_NAME,
    ORDER_BY_WEIGHT,
    GET_DETAIL
   } from "../Actions/actions_type"
//codigo
const initialState = {
    breeds : [],
    temperaments: [],
    breed: [],
    filtered: false,
}

export default function rootReducer(state = initialState, action) {

if (action.type === GET_BREEDS){
    return {
        ...state,
        breeds: action.payload
    }
};

if (action.type === GET_BREED){
    console.log('payload', action.payload)
    return {
        ...state,
        breeds: action.payload
    }
};

if (action.type === GET_TEMPERAMENTS){
    return {
        ...state,
        temperaments: action.payload
    }
};

if (action.type === GET_FILTER_TEMPERAMENTS){
    return {
        ...state,
        temperaments: action.payload,
        filtered: true
    }
};

if (action.type === ORDER_BY_NAME){
    return {
        ...state,
        breeds: action.payload,
        filtered: true
    }
};

if (action.type === ORDER_BY_WEIGHT){
    return {
        ...state,
        breeds: action.payload,
        filtered: true
    }
};

if (action.type === GET_DETAIL){
    return {
        ...state,
        breed: action.payload[0]
    }
}

    return state
}