import * as types from "./actionTypes";
const initialState = {
  loading: "",
  error: "",
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_PRODUCT_CART_REQUEST:
      return { ...state, loading: true, error: false };
    case types.ADD_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [...state.cart, payload],
        error: false,
      };
    case types.ADD_PRODUCT_CART_FAILURE:
      return { ...state, loading: false, error: payload };
    //=================//
    case types.FETCH_CART_REQUEST:
      return { ...state, loading: true, error: false };
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [...payload],
        error: false,
      };
    case types.FETCH_CART_FAILURE:
      return { ...state, loading: false, error: payload };
    //====================//
    case types.REMOVE_PRODUCT_CART_REQUEST:
      return { ...state, loading: true, error: false };
    case types.REMOVE_PRODUCT_CART_FAILURE:
      return { ...state, loading: false, error: payload };
    //====================//
    
    default:
      return state;
  }
};
