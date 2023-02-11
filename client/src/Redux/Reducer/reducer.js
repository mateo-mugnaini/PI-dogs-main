//import
import {
  GET_BREEDS,
  GET_BREED,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  GET_DETAIL,
  ORDER_BY_WEIGHT,
} from "../Actions/actions_type";
//codigo
const initialState = {
  breeds: [],
  temperaments: [],
  breed: [],
  filtered: false,
};

export default function rootReducer(state = initialState, action) {
  if (action.type === GET_BREEDS) {
    return {
      ...state,
      breeds: action.payload,
    };
  }

  if (action.type === GET_BREED) {
    return {
      ...state,
      breeds: action.payload,
    };
  }

  if (action.type === GET_TEMPERAMENTS) {
    return {
      ...state,
      temperaments: action.payload,
    };
  }

  if (action.type === GET_DETAIL) {
    return {
      ...state,
      breed: action.payload[0],
    };
  }

  if (action.type === ORDER_BY_NAME) {
    const allBreeds = [...state.breeds];

    allBreeds.sort((a, b) => {
      let ordenA = a.name ? a.name.toUpperCase() : "";
      let ordenB = b.name ? b.name.toUpperCase() : "";

      if (action.payload === "A-Z") {
        if (ordenA === ordenB) {
          return 0;
        } else if (ordenA < ordenB) {
          return -1;
        }
        return 1;
      }
      if (action.payload === "Z-A") {
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
      filtered: true,
    };
  }

  // if (action.type === ORDER_BY_WEIGHT){
  //     const allBreeds = [...state.breeds];
  //     console.log(allBreeds);

  //     allBreeds.sort((a,b) => {
  //         let pesoAapi = a.weight?.metric?.charAt(0) + a.weight?.metric?.charAt(1);
  //         let pesoBapi= b.weight?.metric?.charAt(0) + b.weight?.metric?.charAt(1);
  //         let pesoAdb = a.weight?.metric?.toString().charAt(0) + a.weight?.metric?.toString().charAt(1) ;
  //         let pesoBdb= b.weight?.metric?.toString().charAt(0) + b.weight?.metric?.toString().charAt(1);
  //         let ordenA = (pesoAapi || pesoAdb) ? Number(pesoAapi || pesoAdb) : '' ;
  //         let ordenB = (pesoBapi || pesoBdb) ? Number(pesoBapi || pesoBdb) : '' ;

  //         if (action.payload === 'ASC'){
  //             if (ordenA === ordenB){
  //                 return 0;
  //             } else if (ordenA < ordenB){
  //                 return -1;
  //             } return 1
  //         }
  //         if (action.payload === 'DES') {
  //             if (ordenA === ordenB) {
  //               return 0;
  //             } else if (ordenA < ordenB) {
  //               return 1;
  //             }
  //             return -1;
  //           }
  //         });
  //     return {
  //         ...state,
  //         breeds: allBreeds,
  //         filtered: true
  //     }
  // }

  if (action.type === ORDER_BY_WEIGHT) {
    const allBreeds = [...state.breeds];
    allBreeds.sort((a, b) => {
      let weightA = a.weight;
      let weightB = b.weight;

      let weightANumber;
      let weightBNumber;

      if (typeof weightA === "object") {
        weightANumber = Number(weightA.metric.split("-")[0].trim());
      } else {
        weightANumber = Number(weightA.split("-")[0].trim());
      }

      if (typeof weightB === "object") {
        weightBNumber = Number(weightB.metric.split("-")[0].trim());
      } else {
        weightBNumber = Number(weightB.split("-")[0].trim());
      }

      if (action.payload === "ASC") {
        if (weightANumber === weightBNumber) {
          return 0;
        } else if (weightANumber < weightBNumber) {
          return -1;
        }
        return 1;
      }
      if (action.payload === "DES") {
        if (weightANumber === weightBNumber) {
          return 0;
        } else if (weightANumber < weightBNumber) {
          return 1;
        }
        return -1;
      }
    });
    return {
      ...state,
      breeds: allBreeds,
      filtered: true,
    };
  }

  return state; // Estado base
}
