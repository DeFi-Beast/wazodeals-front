import { FETCH_ALL, FETCH_DISCOUNT, FETCH_ALL_MERCHANTS, START_LOADING, END_LOADING } from "../constants";
import * as api from '../api'

export const getAllDiscounts = (page)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchAllDiscounts(page)

        dispatch({type:FETCH_ALL, payload:data})

        dispatch({type:END_LOADING})

        
    } catch (error) {
        
    }

}
export const getDiscountById = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchDiscountById(id)
        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const getDiscountsBySearch = (searchQuery)=> async(dispatch) => {
    
    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchDiscountsBySearch(searchQuery)

        
        dispatch({type:END_LOADING})


        dispatch({type:FETCH_ALL, payload:data})
       
        
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