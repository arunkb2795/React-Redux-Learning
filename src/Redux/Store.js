import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import userReducer from "./Reducers/userReducer";
import thunk from "redux-thunk";
const store = createStore(
  combineReducers({ userReducer }),
  {},
  applyMiddleware(thunk, logger)
);
export default store;
