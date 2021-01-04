import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  const authData = useSelector((state) => state.authReducer.authData);
  console.log({ authData });
  let token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        return !token ? <Redirect to="/login" /> : <Component {...props} />;
      }}
    ></Route>
  );
}
