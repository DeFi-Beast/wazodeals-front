import { combineReducers } from "redux";

import discounts from "./discountReducers";
import merchants from "./merchantReducers";
import auth from "./authReducers";

const reducers = combineReducers({
    discounts, merchants, auth
})

export default reducers