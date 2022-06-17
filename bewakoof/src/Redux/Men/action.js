import * as types from "./actionTypes";
import axios from "axios";

const fetchDataRequest = (payload) => {
  return {
    type: types.FETCH_MEN_DATA_REQUEST,
    payload,
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: types.FETCH_MEN_DATA_SUCCESS,
    payload,
  };
};

const fetchDataFailure = (payload) => {
  return {
    type: types.FETCH_MEN_DATA_FAILURE,
    payload,
  };
};

export const fetchData = (payload) => (dispatch) => {
  dispatch(fetchDataRequest());

  axios
    .get("/men-clothing", { params: { ...payload } })
    .then((r) =>{ console.log("res",r);
    dispatch(fetchDataSuccess(r.data))})
    .catch((e) => {console.log("err",e);dispatch(fetchDataFailure(e.data))});
};
