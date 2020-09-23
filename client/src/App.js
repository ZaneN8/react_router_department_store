import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import DepartmentForm from "./departments/DepartmentForm";
import Departments from "./departments/Departments";

function App() {
  return (
    <>
      <NavBar />
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/departments/new" component={DepartmentForm} />
        </Switch>
      </>
    </>
  );
}

export default App;
