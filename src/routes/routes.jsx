import React from "react";
import { Route, Switch } from "react-router";

import Home from "../containers/Home/Home";
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";

export default () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/features" component={Features} />
      <Route component={Home} />
    </Switch>
  </div>
);
