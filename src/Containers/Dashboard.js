import React, { useEffect } from "react";
import axios from "../api/axios";
import {
  Button,
  Jumbotron,
  Nav,
  Navbar,
  Card,
  CardColumns,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/authActions";
import { postCreation } from "../Redux/Actions/postActions";
import { getAllPosts } from "../Redux/Actions/postActions";
export default function Dashboard() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const posts = useSelector((state) => state.postReducer.postData);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let note = event.target.note.value;
    dispatch(postCreation(name, note));
  };
  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`posts/${id}.json`).then((response) => {
      console.log(response);
      dispatch(getAllPosts());
    });
  };
  //console.log(posts);
  return (
    <div>
      <Navbar sticky="top" bg="primary" variant="dark">
        <Navbar.Brand href="#home">KattaPost!</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>
              <Link to="/login" style={{ color: "#fff" }}>
                Logout
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row className="mt-3">
          <Col sm={8}>
            <Jumbotron>
              <h1>Celebrate endings for they precede new beginnings.</h1>
              <p>Create your new year resolution and share with me.</p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col sm={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Your name..."
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Post</Form.Label>
                <Form.Control
                  name="note"
                  as="textarea"
                  rows={3}
                  placeholder="Type something..."
                />
              </Form.Group>
              <Button className="w-100 mt-3 mb-5" type="submit">
                Create Post
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <CardColumns>
          {posts.map((item) => {
            return (
              <Card key={item.id} border="success" className="p-3">
                <Button
                  style={{ float: "right" }}
                  type="button"
                  variant="light"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash color="#007bff" size={24} />
                </Button>
                <blockquote className="blockquote mb-0 card-body">
                  <p>{item.note}</p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Post Created by{" "}
                      <cite title="Source Title">{item.name}</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </div>
  );
}
