//import
import { GET_BREEDS,
    GET_BREED,
    GET_TEMPERAMENTS,
    GET_FILTER_TEMPERAMENTS,
    ORDER_BY_NAME,
    // ORDER_BY_WEIGHT,
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

if (action.type === GET_DETAIL){
    return {
        ...state,
        breed: action.payload[0]
    }
}

if (action.type === ORDER_BY_NAME){
    const allBreeds = [...state.breeds];
    console.log(state.breeds)
    allBreeds.sort((a,b) => {
        let ordenA = a.name ? a.name.toUpperCase() : '' ;
        let ordenB = b.name ? b.name.toUpperCase() : '';

        if (action.payload === 'A-Z'){
            if (ordenA === ordenB){
                return 0;
            } else if (ordenA < ordenB){
                return -1;
            } return -1
        }
        if (action.payload === 'Z-A') {
            if (ordenA === ordenB) {
              return 0;
            } else if (ordenA < ordenB) {
              return 1;
            }
            return -1;
          }
        });
    return {
        ...state,
        breeds: allBreeds,
        filtered: true
    }
};

    return state // Estado base
}