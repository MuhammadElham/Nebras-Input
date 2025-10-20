import React, { Component } from "react";
import Input from "./component/Input/index";
import Change from "@/pages/Change/index";
import styles from "@/index.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <Change />
      </div>
      // <div>
      //   <Input fieldid="purchaseorderno" />
      //   <Input fieldid="purchasetype" />
      //   <Input fieldid="purchaseaccount" />
      //   <Input fieldid="invoiceaccount" />
      //   <Input fieldid="invoiceaddressid" />
      //   <Input fieldid="postingdate" />
      //   <Input fieldid="requireddate" />
      //   <Input fieldid="notes" />
      //   <Input fieldid="deliverytermno" />
      //   <Input fieldid="deliverymodeno" />
      //   <Input fieldid="contactno" />
      //   <Input fieldid="deliveryaddress" />
      // </div>
    );
  }
}

export default App;
