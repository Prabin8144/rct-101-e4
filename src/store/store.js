// TODO: use this store variable to create a store.







import { authReducer } from "./auth/auth.reducer";
import thunk from "redux-thunk";

import {
  compose,
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { productReducer } from "./product/product.reducer";


const rootRducer = combineReducers({
  auth: authReducer,
  product:productReducer,
});



const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       
      })
    : compose;


const enhancer = composeEnhancers(
  applyMiddleware(thunk)
 
);

export const store = createStore(rootRducer, enhancer);


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
