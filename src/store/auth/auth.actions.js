import axios from "axios";
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./auth.types";





const loinRequest = () => ({
  type: AUTH_SIGN_IN_LOADING,
});

const loginSuccess = (token) => ({
  type: AUTH_SIGN_IN_SUCCESS,
  payload: token,
});

const loginFailure = () => ({
  type: AUTH_SIGN_IN_ERROR,
});





let token = localStorage.getItem("token") || "";

export const getAuth = (payload, navigate) => async (dispatch) => {
  dispatch(loinRequest());

  try {
    let res = await axios.post("https://reqres.in/api/login", payload);
    let data = res.data;
    console.log(data);
    token = data.token;
    dispatch(loginSuccess(token));
    navigate("/");
    localStorage.setItem("token", token);
  } 
  catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};
