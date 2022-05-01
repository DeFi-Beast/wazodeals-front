import { combineReducers } from "redux";

import discounts from "./discountReducers";
import receipts from "./receiptReducers";
import merchants from "./merchantReducers";
import auth from "./authReducers";
import notify from "./notifyReducers"
import addToCart from "./CartReducers"
import user from "./userReducers"

const reducers = combineReducers({
    discounts, merchants, auth, notify, addToCart, receipts
})

export default reducers