import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { auth } from "../Redux/Actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const errors = useSelector((state) => state.authReducer.error);
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  let signUp = false;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match!");
    }
    try {
      setError("");

      await dispatch(
        auth(emailRef.current.value, passwordRef.current.value, history, signUp)
      );
    } catch {
      setError("Fail to create account");
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {errors && <Alert variant="danger">{errors}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
            <div className="w-100 text-center mt-4">
              Already have an account?<Link to="/login">Sign In</Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
