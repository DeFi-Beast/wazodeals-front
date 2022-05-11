import { SIGN_IN, START_LOADING, END_LOADING } from "../constants";
import * as api from '../api'
import {toast} from "react-toastify"


export const updateUser = (profile)=> async(dispatch) => {
    

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.updateUser(profile)

        dispatch({type:SIGN_IN, data:data})

        console.log(data)
        dispatch({type:END_LOADING})
        // navigate(`/user/${data.receipt.user}`)
        // window.location.reload(false);
        data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))
        
    } catch (error) {
        
    }

}
export const updateUserTotalPoint = (id, value)=> async(dispatch) => {
    

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.updateUserTotalPoint(id, value)

        dispatch({type:SIGN_IN, data:data})

        console.log(data)
        dispatch({type:END_LOADING})
        // navigate(`/user/${data.receipt.user}`)
        // window.location.reload(false);
        // data.success && dispatch( toast.success(<>{data.message}</>))
        // data.error && dispatch( toast.error(<>{data.message}</>))
        
    } catch (error) {
        
    }

}

