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

  //===================================//
  const addOrderRequest = (payload) => {
    return {
      type: types.ADD_ORDER_REQUEST,
      payload,
    };
  };
  
  const addOrderSuccess = (payload) => {
    return {
      type: types.ADD_ORDER_SUCCESS,
      payload,
    };
  };
  
  const addOrderFailure = (payload) => {
    return {
      type: types.ADD_ORDER_FAILURE,
      payload,
    };
  };
  
  export const addOrder = (payload) => (dispatch) => {
    dispatch(addOrderRequest());
    const orderPayload = [];
    for (let product of payload) {
      product && orderPayload.push(axios.post("/orders", product));
    }
    Promise.all(orderPayload)
      .then((r) =>{console.log("resCheck",r); ;dispatch(addOrderSuccess())})
      .then(() => dispatch(emptyCart(payload)))
      .catch((e) => dispatch(addOrderFailure()));
  };
  
  //=================================//
  //=========================================//
  
  const emptyCartRequest = (payload) => {
    return {
      type: types.EMPTY_CART_REQUEST,
      payload,
    };
  };
  
  const emptyCartSuccess = (payload) => {
    return {
      type: types.EMPTY_CART_SUCCESS,
      payload,
    };
  };
  
  const emptyCartFailure = (payload) => {
    return {
      type: types.EMPTY_CART_FAILURE,
      payload,
    };
  };
  
  export const emptyCart = (payload) => (dispatch) => {
    dispatch(emptyCartRequest());
    const deleteCart = [];
    for (let obj of payload) {
      let temp = dispatch(removeProductCart(obj.id));
      deleteCart.push(temp);
    }
    Promise.all(deleteCart)
      .then((r) => dispatch(emptyCartSuccess()))
      .catch((e) => dispatch(emptyCartFailure()));
  };
//============================================================//  
const fetchOrderRequest = (payload) => {
    return {
      type: types.FETCH_ORDER_REQUEST,
      payload,
    };
  };
  
  const fetchOrderSuccess = (payload) => {
    return {
      type: types.FETCH_ORDER_SUCCESS,
      payload,
    };
  };
  
  const fetchOrderFailure = (payload) => {
    return {
      type: types.FETCH_ORDER_FAILURE,
      payload,
    };
  };
  
  export const fetchOrderData = () => (dispatch) => {
    dispatch(fetchOrderRequest());
  
    axios
      .get("/orders")
      .then((r) => dispatch(fetchOrderSuccess(r.data)))
      .catch((e) => dispatch(fetchOrderFailure(e.data)));
  };