import { combineReducers } from "redux";
import discounts from "./discountReducers";
import coupons from "./couponReducers";
import receipts from "./receiptReducers";
import merchants from "./merchantReducers";
import auth from "./authReducers";
import notify from "./notifyReducers"
import addToCart from "./CartReducers"


const reducers = combineReducers({
    discounts, merchants, auth, notify, addToCart, receipts, coupons
})

export default reducers