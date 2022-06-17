import * as types from "./actionTypes";
import axios from "axios";


//Add product to cart:-->
const addProductCartRequest = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_REQUEST,
      payload,
    };
  };
  
  const addProductCartSuccess = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_SUCCESS,
      payload,
    };
  };
  
  const addProductCartFailure = (payload) => {
    return {
      type: types.ADD_PRODUCT_CART_FAILURE,
      payload,
    };
  };
  
  export const addProductCart = (payload) => (dispatch) => {
    dispatch(addProductCartRequest());
  
    axios
      .post("/cart", payload)
      .then((r) => dispatch(addProductCartSuccess(r.data)))
      .catch((e) => dispatch(addProductCartFailure(e.data)));
  };

//==================================================//
  //Fetch data to cart page:--->
const fetchCartRequest = (payload) => {
    return {
      type: types.FETCH_CART_REQUEST,
      payload,
    };
  };
  
  const fetchCartSuccess = (payload) => {
    return {
      type: types.FETCH_CART_SUCCESS,
      payload,
    };
  };
  
  const fetchCartFailure = (payload) => {
    return {
      type: types.FETCH_CART_FAILURE,
      payload,
    };
  };
  
  export const fetchCartData = (payload) => (dispatch) => {
    dispatch(fetchCartRequest());
  
    axios
      .get("/cart")
      .then((r) => dispatch(fetchCartSuccess(r.data)))
      .catch((e) => dispatch(fetchCartFailure(e.data)));
  };
  
  //============================================//
 //Remove product from cart page:-->
  
  const removeProductCartRequest = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_REQUEST,
      payload,
    };
  };
  
  const removeProductCartSuccess = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_SUCCESS,
      payload,
    };
  };
  
  const removeProductCartFailure = (payload) => {
    return {
      type: types.REMOVE_PRODUCT_CART_FAILURE,
      payload,
    };
  };
  
  export const removeProductCart = (id) => (dispatch) => {
    dispatch(removeProductCartRequest());
  
    axios
      .delete(`/cart/${id}`)
      .then((r) => dispatch(removeProductCartSuccess(r.data)))
      .then(()=>dispatch(fetchCartData()))
      .catch((e) => dispatch(removeProductCartFailure(e.data)));
  };