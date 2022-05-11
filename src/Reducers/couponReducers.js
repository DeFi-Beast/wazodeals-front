import { FETCH_ALL_COUPON, FETCH_COUPON, UPDATE_CLICK } from "../constants";


let initialStateCoupon = []
let refCoupon = null

const couponReducers = (state={coupons:[], coupon:[]}, action) => {
    switch (action.type) {
        case FETCH_ALL_COUPON:
      localStorage.setItem("coupons", JSON.stringify(action.payload));

        return {...state, coupons:action.payload}
        case FETCH_COUPON:
        return {...state, coupon:action.payload}
        case UPDATE_CLICK:
      initialStateCoupon = JSON.parse(localStorage.getItem("coupons"));
      refCoupon = initialStateCoupon?.coupons?.find((item) => item._id === action.payload.id);
      refCoupon?.clicks?.push(action.payload.userData) 

      console.log("=======hittingupdateclickaction.payload==========")
      console.log(action.payload)
      console.log(refCoupon)
      localStorage.setItem("coupons", JSON.stringify(initialStateCoupon));
        
        console.log(initialStateCoupon)
        return {...state, coupon:initialStateCoupon}
    
        default:
            return state;
    }
}

export default couponReducers