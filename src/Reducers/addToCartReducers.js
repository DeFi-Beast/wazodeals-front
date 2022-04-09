import { ADD_TO_CART } from "../constants";
const initialState = [];

const addToCartReducers = (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (initialState.length > 0) {
          console.log("true initialstate")
        const check = initialState.find(
          (cart) => cart._id === action.payload._id
        );
        console.log("=======check==========")
        console.log(check)
        if (check) {
          return { ...state, cart: initialState };
        }
        console.log(check);
        initialState.push(action.payload);

        return { ...state, cart: initialState };
      }
      initialState.push(action.payload);
      console.log("============initialState===========")
      console.log(initialState)
      console.log(action.payload)

      return { ...state, cart: initialState };

    default:
      return state;
  }
};

export default addToCartReducers;
