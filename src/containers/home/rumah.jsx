import React, { Component } from "react";
import Rumah from "../../components/home";
import Header from "../../components/header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Rumah />
      </div>
    );
  }
}
