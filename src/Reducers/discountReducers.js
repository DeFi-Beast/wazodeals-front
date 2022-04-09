import { FETCH_ALL, FETCH_DISCOUNT } from "../constants";



const discountReducers = (state={discounts:[], discount:[]}, action) => {
    switch (action.type) {
        case FETCH_ALL:
        return {...state, discounts:action.payload}
        case FETCH_DISCOUNT:
        return {...state, discount:action.payload}
    
        default:
            return state;
    }
}

export default discountReducers