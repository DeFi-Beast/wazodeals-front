import { FETCH_ALL_COUPON, FETCH_COUPON,  START_LOADING, END_LOADING } from "../constants";
import * as api from '../api'

export const getAllCoupons = ( page )=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchAllCoupons(page)

        dispatch({type:FETCH_ALL_COUPON, payload:data})

        dispatch({type:END_LOADING})

        
    } catch (error) {
        
    }

}
export const getCouponById = (id)=> async(dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchCouponById(id)
        dispatch({type:END_LOADING})

        console.log(data)

        dispatch({type:FETCH_COUPON, payload:data})
        
    } catch (error) {
        
    }

}
export const getCouponsBySearch = (searchQuery)=> async(dispatch) => {
    
    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchCouponsBySearch(searchQuery)

        
        dispatch({type:END_LOADING})


        dispatch({type:FETCH_ALL_COUPON, payload:data})
       
        
    } catch (error) {
        
    }

}
export const updateCoupon = (id, coupon)=> async(dispatch) => {

    try {

        const {data} = await api.updateCoupon(id, coupon)

        

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const updateClick = (couponId, userData)=> async(dispatch) => {

    try {

        const {data} = await api.updateCouponClick(couponId, userData)

        

        // dispatch({type:UPDATE_DISCOUNT, payload:data})
        
    } catch (error) {
        
    }

}
export const getAllMerchants = ()=> async(dispatch) => {

    try {

        const {data} = await api.fetchAllMerchants({})

        // console.log(data)

        dispatch({type:FETCH_ALL_COUPON, payload:data})
        
    } catch (error) {
        
    }

}