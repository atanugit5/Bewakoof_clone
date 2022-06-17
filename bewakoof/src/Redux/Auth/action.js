import * as types from "./actionTypes";
import axios from "axios";

export const signInRequest = () => {
  return { type: types.SIGNIN_REQUEST };
};
export const signInSuccess = (payload) => {
  return { type: types.SIGNIN_SUCCESS, payload };
};
export const signInFailure = (payload) => {
  return { type: types.SIGNIN_FAILURE, payload };
};

export const signIn = (payload) => (dispatch) => {
  dispatch(signInRequest());
  axios
    .post("https://reqres.in/api/login", payload)
    .then((r) => {
      console.log("res", r);
      dispatch(signInSuccess(r.data));
    })
    .catch((err) => {
      console.log("err", err);
      dispatch(signInFailure(err.data));
    });
};
