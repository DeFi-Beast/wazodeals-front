

import React from 'react'
import { SIGN_IN, LOG_OUT, START_LOADING, END_LOADING } from '../constants';

const authReducers = (state={Auth: null, isLoading:false}, action) => {

    switch (action.type) {
        case
         SIGN_IN:
            localStorage.setItem("profile", JSON.stringify(action?.data))
            

            return {...state, Auth:action?.data}
        case LOG_OUT:
            console.log("logout")
            localStorage.clear()

            return {...state, Auth:null}
        case START_LOADING:
           
            return {...state, isLoading:true}
        case END_LOADING:
           
            return {...state, isLoading:false}
    
        default:
            return state
    }
 
}

export default authReducers