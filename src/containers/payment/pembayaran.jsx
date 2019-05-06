import React, { Component } from "react";
import Payment from "../../components/payment";
import Header from "../../components/header";

export default class Pembayaran extends Component {
  render() {
    return (
      <div>
        <Header />
        <Payment />
      </div>
    );
  }
}
