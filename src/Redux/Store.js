import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import userReducer from "./Reducers/userReducer";
const store = createStore(
  combineReducers({ userReducer }),
  {},
  applyMiddleware(logger)
);
export default store;
