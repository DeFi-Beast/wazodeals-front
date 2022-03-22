

import React from 'react'
import { SIGN_IN, LOG_OUT } from '../constants';

const authReducers = (state={Auth: null}, action) => {
    switch (action.type) {
        case SIGN_IN:
            localStorage.setItem("profile", JSON.stringify(action?.data))

            return {...state, Auth:action?.data}
        case LOG_OUT:
            console.log("logout")
            localStorage.clear()

            return {...state, Auth:null}
    
        default:
            return state
    }
 
}

export default authReducers