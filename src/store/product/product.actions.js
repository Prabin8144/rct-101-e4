// Product actions here

import axios from "axios";
import { DELETE_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types";



export const getProductRequested = () => ({
    type: GET_PRODUCTS_LOADING,
  });
  
  export const getProductSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload,
  });
  
  export const getProductError = () => ({
    type: GET_PRODUCTS_ERROR,
  });
  
  const deletProductSuccess = (id) => ({
    type: DELETE_PRODUCTS,
    payload: id, 
  });
  
  
  
  
  export const getProducts = () => async (dispatch) => {
    dispatch(getProductRequested());
    try {
      let res = await axios.get("http://localhost:8080/products");
      let data = await res.data;
  
      dispatch(getProductSuccess(data));
      // let data = res.data;
    } catch (err) {
      dispatch(getProductError());
    }
  };
  
 
  
  //Delete
  export const deleteProduct = (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:8080/products/${id}`);
      dispatch(deletProductSuccess(res));
    } catch (err) {
      console.log(err);
    }
  };
  