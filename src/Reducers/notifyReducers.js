

import React from 'react'
import { NOTIFY } from '../constants';



const notifyReducers = (state={success:null, error:null, msg: null}, action) => {
    switch (action.type) {
        case NOTIFY:
                
            return {...state,success:action.payload.data.success, error:action.payload.data.error, msg:action.payload.data.message }
          
        default:
            return state
    }
 
}

export default notifyReducers