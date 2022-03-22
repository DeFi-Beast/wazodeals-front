import { FETCH_ALL, FETCH_DISCOUNT, FETCH_ALL_MERCHANTS } from "../constants";
import * as api from '../api'

export const getAllDiscounts = ()=> async(dispatch) => {

    try {

        const {data} = await api.fetchAllDiscounts({})

        dispatch({type:FETCH_ALL, payload:data})
        
    } catch (error) {
        
    }

}
export const getAllDiscountsById = (id)=> async(dispatch) => {

    try {

        const {data} = await api.fetchAllDiscountsById(id)

        console.log(data)

        // dispatch({type:FETCH_ALL, payload:data})
        
    } catch (error) {
        
    }

}
export const updateDiscount = (id, discount)=> async(dispatch) => {

    try {

        const {data} = await api.updateDiscount(id, discount)

        

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const getAllMerchants = ()=> async(dispatch) => {

    try {

        const {data} = await api.fetchAllMerchants({})

        // console.log(data)

        dispatch({type:FETCH_ALL_MERCHANTS, payload:data})
        
    } catch (error) {
        
    }

}