import {SIGN_UP, SIGN_IN} from "../constants"
import * as api from "../api"

export const usersignin = (user, navigate) => async(dispatch) => {
    try {
        const {data} = await api.userSignIn(user)
        dispatch({type:SIGN_IN, data:data})
        navigate("/")
        
    } catch (error) {
        
    }
    
}
export const usersignup = (user, navigate) => async(dispatch) => {

    try {
        const {data} = await api.userSignup(user)

        
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