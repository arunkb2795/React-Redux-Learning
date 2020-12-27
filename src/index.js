import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from "redux-logger";
// const first_initialState = {
//   result: 0,
//   lastValues: [],
// };

// const second_initialState = {
//   name: "Arun",
//   age: 25,
// };

// const mathReducer = (state = first_initialState, action) => {
//   switch (action.type) {
//     case "ADD":
//       state = {
//         ...state,
//         result: state.result + action.payload,
//         lastValues: [...state.lastValues, action.payload],
//       };
//       break;
//     case "SUBTRACT":
//       state = {
//         ...state,
//         result: state.result - action.payload,
//         lastValues: [...state.lastValues, action.payload],
//       };
//       break;
//     default:
//       return state;
//   }
//   return state;
// };

// const userReducer = (state = second_initialState, action) => {
//   switch (action.type) {
//     case "NAME":
//       state = {
//         ...state,
//         name: action.payload,
//       };
//       break;
//     case "AGE":
//       state = {
//         ...state,
//         age: action.payload,
//       };
//       break;
//     default:
//       return state;
//   }
//   return state;
// };

// const store = createStore(
//   combineReducers({ mathReducer, userReducer }),
//   {},
//   applyMiddleware(logger)
// );
// // store.subscribe(() => {
// //   console.log("Store Updated", store.getState());
// // });
// store.dispatch({
//   type: "ADD",
//   payload: 100,
// });
// store.dispatch({
//   type: "SUBTRACT",
//   payload: 10,
// });

// store.dispatch({
//   type: "NAME",
//   payload: "Max",
// });
// store.dispatch({
//   type: "AGE",
//   payload: 30,
// });
