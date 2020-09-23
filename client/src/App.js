import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Departments from "./departments/Departments";
import SamplesDemo from "./samples/SamplesDemo";

function App() {
  return (
    <>
      <NavBar />
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/samplesDemo" component={SamplesDemo} />
          <Route exact path="/departments" component={Departments} />
        </Switch>
      </>
    </>
  );
}

export default App;
