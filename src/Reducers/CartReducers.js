import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CART_QTY,
  CART_QTY_MINUS,
  CART_QTY_PLUS,
} from "../constants";
let initialState = [];
let total = null;
let refCart = null;

const CartReducers = (state = { cart: [], cartTotal: 0 }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (initialState.length > 0) {
        const check = initialState.find(
          (cart) => cart._id === action.payload._id
        );

        console.log(check);
        if (check) {
          return { ...state, cart: initialState };
        }

        initialState.push(action.payload);
        let total = initialState.reduce(function (previousValue, currentValue) {
          return (
            previousValue +
            currentValue.qty *
              (currentValue.price -
                (currentValue.price * currentValue.discount) / 200)
          );
        }, 0);
        localStorage.setItem("cart", JSON.stringify(initialState));
        localStorage.setItem("cartTotal", total);
        return { ...state, cart: initialState, cartTotal: total };
      }

      initialState.push(action.payload);
      total = initialState.reduce(function (previousValue, currentValue) {
        return (
          previousValue +
          currentValue.qty *
            (currentValue.price -
              (currentValue.price * currentValue.discount) / 200)
        );
      }, 0);

      localStorage.setItem("cart", JSON.stringify(initialState));
      localStorage.setItem("cartTotal", total);
      return { ...state, cart: initialState, cartTotal: total };

    case REMOVE_CART_ITEM:
      initialState = JSON.parse(localStorage.getItem("cart"));

      initialState = initialState.filter((item) => item._id !== action.payload);
      total = initialState.reduce(function (previousValue, currentValue) {
        return (
          previousValue +
          currentValue.qty *
            (currentValue.price -
              (currentValue.price * currentValue.discount) / 200)
        );
      }, 0);
      localStorage.setItem("cart", JSON.stringify(initialState));
      localStorage.setItem("cartTotal", total);

      return { ...state, cart: initialState, cartTotal: total };
    case CART_QTY:
      initialState = JSON.parse(localStorage.getItem("cart"));

      refCart = initialState.find((item) => item._id === action.payload.id);

      console.log(refCart);

      refCart.qty = action.payload.value;
      total = initialState.reduce(function (previousValue, currentValue) {
        return (
          previousValue +
          currentValue.qty *
            (currentValue.price -
              (currentValue.price * currentValue.discount) / 200)
        );
      }, 0);
      localStorage.setItem("cart", JSON.stringify(initialState));
      localStorage.setItem("cartTotal", total);

      return { ...state, cart: initialState, cartTotal: total };
    case CART_QTY_PLUS:
      initialState = JSON.parse(localStorage.getItem("cart"));

      refCart = initialState.find((item) => item._id === action.payload.id);

      console.log(refCart);

      refCart.qty = Number(refCart.qty) + 1;
      total = initialState.reduce(function (previousValue, currentValue) {
        return (
          previousValue +
          currentValue.qty *
            (currentValue.price -
              (currentValue.price * currentValue.discount) / 200)
        );
      }, 0);
      localStorage.setItem("cart", JSON.stringify(initialState));
      localStorage.setItem("cartTotal", total);

      return { ...state, cart: initialState, cartTotal: total };
    case CART_QTY_MINUS:
      initialState = JSON.parse(localStorage.getItem("cart"));

      refCart = initialState.find((item) => item._id === action.payload.id);

      console.log(refCart);

      refCart.qty = Number(refCart.qty) - 1;
      total = initialState.reduce(function (previousValue, currentValue) {
        return (
          previousValue +
          currentValue.qty *
            (currentValue.price -
              (currentValue.price * currentValue.discount) / 200)
        );
      }, 0);
      localStorage.setItem("cart", JSON.stringify(initialState));
      localStorage.setItem("cartTotal", total);

      return { ...state, cart: initialState, cartTotal: total };

    default:
      return state;
  }
};

export default CartReducers;
