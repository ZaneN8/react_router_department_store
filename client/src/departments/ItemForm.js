import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ItemForm = ({ history }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <Form>
      <Form.Label as="h1">New Item to Add</Form.Label>
      <Form.Group widths="equals">
        <Form.Control
          label="Name"
          placeholder="new item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Form.Control
          label="Price"
          placeholder="enter the price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="dark" onClick={history.goBack}>
        Back
      </Button>
    </Form>
  );
};

//   const ItemForm = (props) => {
//     console.log(props);

//   // return (
//   //   <div>
//   //     {/* <p>{props.match.params.id}</p> */}
//   //     Item Form
//   //   </div>
//   // );
// };

export default ItemForm;
