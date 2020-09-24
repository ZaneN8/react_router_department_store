import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    Axios.get("/api/departments")
      .then((res) => {
        setDepartments(res.data);
      })
      .catch((err) => {
        alert("Error: Could not find departments");
      });
  }, []);

  const renderDepartments = () => {
    return departments.map((department) => (
      <Card key={department.id}>
        <Card.Body>
          <Card.Title>{department.name}</Card.Title>
          <Card.Text>{department.description}</Card.Text>
          <Button
            variant="primary"
            as={Link}
            to={`/departments/${department.id}`}
          >
            Items
          </Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <div>
      <Card.Header as="h1">Department Stores</Card.Header>
      <Button as={Link} to="/departments/new">
        New
      </Button>
      <Card>{renderDepartments()}</Card>
    </div>
  );
};

export default Departments;
