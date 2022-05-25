import { FETCH_RECEIPTS_BY_ID, FETCH_DISCOUNT } from "../constants";

const receiptReducers = (state = { receipt: [] }, action) => {
  switch (action.type) {
    case FETCH_RECEIPTS_BY_ID:
      return { ...state, receipt: action.payload };
    case FETCH_DISCOUNT:
      return { ...state, discount: action.payload };

    default:
      return state;
  }
};

export default receiptReducers;
