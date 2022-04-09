import {ADD_TO_CART ,START_LOADING, END_LOADING, NOTIFY} from "../constants"
import * as api from "../api"
import {toast} from "react-toastify"

export const addtocart = (discount) => async(dispatch) => {
    try {
        dispatch({type:START_LOADING})
        dispatch({type:ADD_TO_CART, discount})

        dispatch({type:END_LOADING})
        // data.success && navigate(`/user/${data.user._id}`)
        // data.success && dispatch( toast.success(<>{data.message}</>))
        // data.error && dispatch( toast.error(<>{data.message}</>))


        
    } catch (error) {
        
    }
    
}
