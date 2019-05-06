import React, { Component } from "react";
import GoFood from "../../components/go-food";
import Header from "../../components/header";

export default class Gofood extends Component {
  render() {
    return (
      <div>
        <Header />
        <GoFood />
      </div>
    );
  }
}
