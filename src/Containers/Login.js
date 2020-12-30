import React, { useRef } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { auth } from "../Redux/Actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();
  const history = useHistory();
  let signUp = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      auth(emailRef.current.value, passwordRef.current.value, history, signUp)
    );
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100 mt-3" type="submit">
              Log In
            </Button>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password</Link>
            </div>
            <div className="w-100 text-center mt-4">
              Need an account?<Link to="/signup">Sign Up</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
