import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "./Item";
import ItemForm from "./ItemForm";

const DepartmentView = ({ history, match }) => {
  const [department, setDepartment] = useState({});
  const [items, setItem] = useState([]);

  useEffect(() => {
    Axios.get(`/api/departments/${match.params.id}`)
      .then((res) => {
        setDepartment(res.data);
      })
      .catch((err) => {
        alert("Error: No departments loaded");
      });

    Axios.get(`/api/departments/${match.params.id}/items`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        alert("Error: Could not retrieve items");
      });
  }, []);

  function renderItems() {
    if (!department.items) {
      return;
    }
    if (department.items.length === 0) {
      return <p>No Inventory</p>;
    }
    return department.items.map((r) => {
      return <Item key={r.id} {...r} departmentId={department.id} />;
    });
  }

  return (
    <div>
      <Card.Header as="h1">{department.name}</Card.Header>
      <Button as={Link} to={`/departments/${department.id}/new`}>
        New Item
      </Button>
      {/* <Card>
        <ItemForm />
      </Card> */}
      <Card>{renderItems()}</Card>
      <Button variant="dark" onClick={history.goBack}>
        Back
      </Button>
    </div>
  );
};

export default DepartmentView;
