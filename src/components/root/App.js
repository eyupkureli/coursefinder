import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route exact component={NotFound}></Route>
      </Switch>
      </BrowserRouter>
      
      
      <Footer></Footer>
    </Container>
  );
}

export default App;
