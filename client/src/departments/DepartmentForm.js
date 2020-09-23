import Axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const DepartmentForm = ({ history }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    console.log(name);
    Axios.post("/api/departments", { name, description })
      .then((res) => {
        history.push("/departments"); // TODO Needs to go back to the departments page
      })
      .catch((err) => {
        alert("Error: Create did not work");
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label as="h1">New Store</Form.Label>
      <br />
      <Form.Group widths="equals">
        <Form.Control
          label="Name"
          placeholder="enter new store"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Form.Control
          label="Description"
          placeholder="enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default DepartmentForm;
