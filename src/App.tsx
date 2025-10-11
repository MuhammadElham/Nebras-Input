import React, { Component } from "react";
import Input from "./component/Input/index";

class App extends Component {
  render() {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Form Example</h2>
        <Input fieldid="purchaseorderno" />
{/* 
        <Input fieldid="purchaseorderno" />
        <Input fieldid="purchasetype" />
        <Input fieldid="purchaseaccount" />
        <Input fieldid="invoiceaccount" />
        <Input fieldid="invoiceaddressid" />
        <Input fieldid="postingdate" />
        <Input fieldid="requireddate" />
        <Input fieldid="notes" />
        <Input fieldid="deliverytermno" />
        <Input fieldid="deliverymodeno" />
        <Input fieldid="contactno" />
        <Input fieldid="deliveryaddress" /> */}
      </div>
    );
  }
}

export default App;
