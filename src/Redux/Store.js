import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import authReducer from "./Reducers/AuthReducer";
import thunk from "redux-thunk";
const store = createStore(
  combineReducers({ authReducer }),
  {},
  applyMiddleware(thunk, logger)
);
export default store;
