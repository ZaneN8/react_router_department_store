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

  // const renderDepartments = () => {
  //   return (
  //     <Card>
  //       <Card.Header>Featured</Card.Header>
  //       <Card.Body>
  //         <Card.Title>Special title treatment</Card.Title>
  //         <Card.Text>
  //           With supporting text below as a natural lead-in to additional
  //           content.
  //         </Card.Text>
  //         <Button variant="primary">Go somewhere</Button>
  //       </Card.Body>
  //     </Card>
  //   );
  // };

  const renderDepartments = () => {
    return departments.map((department) => (
      <Card key={department.id}>
        <Card.Body>
          <Card.Title>{department.name}</Card.Title>
          <Card.Text>{department.description}</Card.Text>
          <Button variant="primary">Items</Button>
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