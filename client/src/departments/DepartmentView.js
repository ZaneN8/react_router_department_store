import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ItemForm from "./ItemForm";

const DepartmentView = ({ history, match }) => {
  const [department, setDepartment] = useState({});
  const [item, setItem] = useState([]);

  useEffect(() => {
    Axios.get(`/api/departments/${match.params.id}`)
      .then((res) => {
        setDepartment(res.data);
      })
      .catch((err) => {
        alert("Error: No departments loaded");
      });
  }, []);

  return (
    <div>
      <Card.Header as="h1">{department.name}</Card.Header>
      <Card>
        <ItemForm />
      </Card>
      <Button color="teal" onClick={history.goBack}>
        Back
      </Button>
    </div>
  );
};

export default DepartmentView;
