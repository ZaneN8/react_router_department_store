import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const ItemForm = ({ history, match, location }) => {
  const [name, setName] = useState(
    location.state && location.state.name ? location.state.name : ""
  );
  const [price, setPrice] = useState(
    location.state && location.state.price ? location.state.price : 0
  );

  async function addItem() {
    try {
      const { department_id } = match.params;
      let res = await axios.post(`/api/departments/${department_id}/items`, {
        name,
        price,
      });
      // at this point I have added to DB need to decide what to do
      history.push(`/departments/${department_id}`);
    } catch (err) {
      console.log(err);
    }
  }

  function editItem() {
    const { department_id, id } = match.params;
    // PUT	/api/departments/:department_id/items/:id {name,price}
    axios
      .put(`/api/departments/${department_id}/items/${id}`, { name, price })
      .then((res) => {
        history.push(`/departments/${department_id}`);
      })
      .catch((err) => {
        alert("error in update");
      });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (match.params.id) {
      editItem();
    } else {
      addItem();
    }

    // POST	/api/departments/:department_id/items ,{name, price}
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label as="h1">
          {match.params.id ? "Edit Item" : "New Item to Add"}
        </Form.Label>
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
            type="number"
            pattern="^\d*(\.\d{0,2})?$"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Button variant="dark" onClick={history.goBack}>
          Back
        </Button>
      </Form>
    </>
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
