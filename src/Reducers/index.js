import { combineReducers } from "redux";

import discounts from "./discounts";
import merchants from "./merchants";

const reducers = combineReducers({
    discounts, merchants
})

export default reducers