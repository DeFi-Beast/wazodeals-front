import {SIGN_UP, SIGN_IN, START_LOADING, END_LOADING, NOTIFY} from "../constants"
import * as api from "../api"
import {toast} from "react-toastify"

export const usersignin = (user, navigate) => async(dispatch) => {
    try {
        dispatch({type:START_LOADING})
        const {data} = await api.userSignIn(user)
        console.log(data)
        
    
        dispatch({type:SIGN_IN, data:data})
        dispatch({type:END_LOADING})
        data.success && navigate(`/`)
        // data.success && navigate(`/user/${data.user._id}`)
        data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))


        
    } catch (error) {
        
    }
    
}
export const usersignup = (user, navigate) => async(dispatch) => {

    try {

        dispatch({type:START_LOADING})
        const {data} = await api.userSignup(user)
        console.log(data)
        
    
        dispatch({type:SIGN_IN, data:data})
        dispatch({type:END_LOADING})
        data.success && navigate("/activate")
        data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))
    } catch (error) {
        
    }

}
export const useractivate = (user, navigate) => async(dispatch) => {

    try {

        dispatch({type:START_LOADING})
        const {data} = await api.userActivate(user)
        console.log(data)
        
    
        dispatch({type:SIGN_IN, data:data})
        dispatch({type:END_LOADING})
        data.success && navigate("/")
        data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))
    } catch (error) {
        
    }

}
export const userforgot = (email, navigate) => async(dispatch) => {

    try {

        dispatch({type:START_LOADING})
        const {data} = await api.userForgot(email)
        console.log(data)
        
        console.log(email)
        // dispatch({type:SIGN_IN, data:data})
        dispatch({type:END_LOADING})
        data.success && navigate(`/reset-password?email=${data.email}`)
        data.error && navigate(`/`)
        data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))
    } catch (error) {
        
    }

}
export const userreset = (user, navigate) => async(dispatch) => {

    try {

        dispatch({type:START_LOADING})
        const {data} = await api.userReset(user)
        console.log(data)
        
        console.log(user)
        dispatch({type:SIGN_IN, data:data})
        dispatch({type:END_LOADING})
        data.success && navigate(`/signup`)
        data.success && dispatch( toast.success(<>{data.message}</>))
        data.error && dispatch( toast.error(<>{data.message}</>))
    } catch (error) {
        
    }

}
export const merchantsignin = (merchant, navigate) => async(dispatch) => {
    try {
        const {data} = await api.merchantSignIn(merchant)

        console.log(data)
        dispatch({type:SIGN_IN, data:data})
        navigate(`/merchants/dashboard/${data.merchant._id}`)
    } catch (error) {
        
    }
    
}

export const merchantsignup = (merchant, navigate) => async(dispatch) => {

    try {
        const {data} = await api.merchantSignup(merchant)

        dispatch({type:SIGN_IN, data:data})
        console.log(data.merchant._id)
        navigate(`/merchants/dashboard/${data.merchant._id}`)
        console.log(data)
        
    } catch (error) {
        
    }

}