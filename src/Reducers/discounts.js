import { FETCH_ALL, FETCH_DISCOUNT } from "../constants";



const discounts = (state={discounts:[]}, action) => {
    switch (action.type) {
        case FETCH_ALL:
        return {...state, discounts:action.payload}
    
        default:
            return state;
    }
}

export default discounts