import { combineReducers } from "redux";

import discounts from "./discountReducers";
import merchants from "./merchantReducers";
import auth from "./authReducers";
import notify from "./notifyReducers"

const reducers = combineReducers({
    discounts, merchants, auth, notify
})

export default reducers