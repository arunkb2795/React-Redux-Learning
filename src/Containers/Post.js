import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Post() {
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Post</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Type something..."
          />
        </Form.Group>
        <Button className="w-100 mt-3" type="submit">
          Create Post
        </Button>
      </Form>
    </div>
  );
}
