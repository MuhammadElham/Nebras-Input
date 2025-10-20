import React, { Component } from "react";
import HeaderInfo from "../../component/Change/HeaderInfo";
import NavBar from "../../component/Change/NavBar";
import DeafaultFinance from "../../component/Change/DeafaultFinance";

class Change extends Component {
  render() {
    return (
      <>
        <NavBar />
        <HeaderInfo />
        <DeafaultFinance />
      </>
    );
  }
}

export default Change;
