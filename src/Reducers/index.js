import { combineReducers } from "redux";

import discounts from "./discountReducers";
import merchants from "./merchantReducers";
import auth from "./authReducers";
import notify from "./notifyReducers"
import addToCart from "./addToCartReducers"

const reducers = combineReducers({
    discounts, merchants, auth, notify, addToCart
})

export default reducers