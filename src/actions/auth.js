import {SIGN_UP, SIGN_IN} from "../constants"
import * as api from "../api"

export const usersignin = (user, navigate) => async(dispatch) => {
    try {
        const {data} = await api.userSignIn(user)

        console.log(data)
    } catch (error) {
        
    }
    
}
export const usersignup = (user, navigate) => async(dispatch) => {

    try {
        const {data} = await api.userSignup(user)

        
    } catch (error) {
        
    }

}
export const merchantsignin = (merchant) => async(dispatch) => {
    try {
        const {data} = await api.merchantSignIn(merchant)
    } catch (error) {
        
    }
    
}
export const merchantsignup = (merchant) => async(dispatch) => {

    try {
        const {data} = await api.merchantSignup(merchant)

        
    } catch (error) {
        
    }

}