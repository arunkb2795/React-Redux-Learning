import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import authReducer from "./Reducers/AuthReducer";
import { postReducer } from "./Reducers/postReducer";
import { postCreationReducer } from "./Reducers/postReducer";
import thunk from "redux-thunk";
const store = createStore(
  combineReducers({ authReducer, postCreationReducer, postReducer }),
  {},
  applyMiddleware(thunk, logger)
);
export default store;
