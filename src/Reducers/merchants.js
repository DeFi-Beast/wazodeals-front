import { FETCH_ALL_MERCHANTS } from "../constants";



const merchants = (state={merchants:[]}, action) => {
    switch (action.type) {
        case FETCH_ALL_MERCHANTS:
        return {...state, merchants:action.payload}
    
        default:
            return state;
    }
}

export default merchants