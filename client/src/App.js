import React from "react";
import { Button } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import SamplesDemo from "./samples/SamplesDemo";

function App() {
  return (
    <>
      <NavBar />
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/samplesDemo" component={SamplesDemo} />
        </Switch>
      </>
    </>
  );
}

export default App;
