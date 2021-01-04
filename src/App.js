import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { autoLogin } from "./Redux/Actions/authActions";
import { Container } from "react-bootstrap";
import Login from "./Containers/Login";
import Dashboard from "./Containers/Dashboard";
import Signup from "./Containers/Signup";
import About from "./Containers/About";
import Post from "./Containers/Post";
import ForgotPassword from "./Containers/ForgotPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Route/PrivateRoute";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);
  return (
    <Router basename="/React-Redux-Learning">
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/post" component={Post} />
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Route path="/React-Redux-Learning/login" component={Login} />
            <Route path="/React-Redux-Learning/signup" component={Signup} />
            <Route
              path="/React-Redux-Learning/forgot-password"
              component={ForgotPassword}
            />
          </div>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
