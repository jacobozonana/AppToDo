import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Create from "./Create/Create";
import Hechos from "./Pages/Hechos/Hechos"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/hechos" component={Hechos} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
