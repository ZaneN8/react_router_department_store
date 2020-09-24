import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ name, price, id, departmentId }) => {
  return (
    <div>
      {name}
      <p>${price}</p>
      <Button
        as={Link}
        to={{
          pathname: `/departments/${departmentId}/items/${id}/edit`,
          state: { name, price },
        }}
      >
        edit
      </Button>
    </div>
  );
};

export default Item;
