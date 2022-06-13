import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./auth.types";

// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,action) => {
  switch (action.type) {
    case AUTH_SIGN_IN_LOADING:{
      return {
        ...state,
        loading:true,
       error:false,
      };
    }
    case AUTH_SIGN_IN_SUCCESS:{
      return {
        ...state,
        loading:false,
        data: {
          ...state.data,
          token: "",
          iisAuthenticated: false,
          
        },
        error:false
      };
    }
    case AUTH_SIGN_IN_ERROR:{
      return {
        ...state,
        loading:false,
       
        error:true
      };
    }
    default:
      return state;
  }
};

