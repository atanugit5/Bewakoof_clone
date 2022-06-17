import * as types from "./actionTypes";
import axios from "axios";

const getSingleProductRequest = (payload) => {
    return {
      type: types.GET_SINGLE_PRODUCT_REQUEST,
      payload,
    };
  };
  
  const getSingleProductSuccess = (payload) => {
    return {
      type: types.GET_SINGLE_PRODUCT_SUCCESS,
      payload,
    };
  };
  
  const getSingleProductFailure = (payload) => {
    return {
      type: types.GET_SINGLE_PRODUCT_FAILURE,
      payload,
    };
  };
  
  export const getSingleProduct = (id) => (dispatch) => {
    dispatch(getSingleProductRequest());
    axios
      .get(`/men-clothing/${id}`)
      .then((r) => dispatch(getSingleProductSuccess(r.data)))
      .catch((err) => dispatch(getSingleProductFailure(err.data)));
  };