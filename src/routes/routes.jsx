import React from "react";
import { Route, Switch } from "react-router";

import Home from "../containers/Home/Home";
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";

class Routes extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  updateState = (state) => this.setState(state)
  render(){
    return(
      <div>
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/features" component={() => <Features user={this.state.user} updateState={this.updateState}/>} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}
export default Routes;
