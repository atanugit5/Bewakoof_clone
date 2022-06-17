import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { cartReducer } from "./Cart/reducer";
import { menReducer } from "./Men/reducer";
import { singleReducer } from "./SingleProduct/reducer";

const rootReducer = combineReducers({
  menData: menReducer,
  singleProduct:singleReducer,
  cartProducts:cartReducer,
  auth:authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
