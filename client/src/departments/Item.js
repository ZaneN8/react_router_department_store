import React from "react";

const Item = ({ name, price, id }) => {
  return (
    <div>
      {name}
      <p>${price}</p>
    </div>
  );
};

export default Item;
