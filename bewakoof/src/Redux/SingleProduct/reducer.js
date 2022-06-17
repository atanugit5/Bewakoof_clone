import * as types from "./actionTypes";
const initialState = {
  loading: "",
  error: "",
  currentProduct: {},
};

export const singleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SINGLE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: false };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentProduct: payload,
        error: false,
      };
    case types.GET_SINGLE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
