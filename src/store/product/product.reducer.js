import { GET_PRODUCTS, DELETE_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = productInitalState,action) => {
  switch (action.type) {
   
    case GET_PRODUCTS_LOADING:
      return {
        ...state,
   
          loading: true,
          error: false,
          data: [],
        
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
       
          loading: false,
          error: false,
          data: action.payload,
        
      };

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
       
          loading: false,
          error: true,
          data: [],
      
      };

    case DELETE_PRODUCTS:
      return {
        ...state,
        
         
          data: state.data.filter((el) => el.id !== action.payload),
     
      };
    default:
     return state;
  }
}