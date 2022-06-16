import * as types from "./actionTypes";
const initialState = {
  loading: "",
  error: "",
  men: [],
  women:[],
  currentProduct: {},
  cart: [],
};

export const menReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_MEN_DATA_REQUEST:
      return { ...state, loading: true, error: false };
    case types.FETCH_MEN_DATA_SUCCESS:
      return { ...state, loading: false, men: payload, error: false };
    case types.FETCH_MEN_DATA_FAILURE:
      return { ...state, loading: false, error: payload };
  
    
    default:
      return state;
  }
};
