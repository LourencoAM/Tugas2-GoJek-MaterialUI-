import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Rumah from "./containers/home";
import Gofood from "./containers/go-food";
import Closing from "./containers/closing";
import Menu from "./containers/menu";
import Payment from "./containers/payment";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Rumah} />
          <Route path="/go-food" component={Gofood} />
          <Route path="/menu" component={Menu} />
          <Route path="/payment" component={Payment} />
          <Route path="/closing" component={Closing} />
        </Switch>
      </div>
    );
  }
}

export default App;
