import React, { Component } from "react";
import Input from "../../../../Input";
import TextHeading from "../../../../Input/TextHeading";
import styles from "@/index.module.scss";

class BasicDataTab extends Component {
  render() {
    return (
      <div className={styles.accordionContentContainerGrids}>
        <div className={styles.firstColumn}>
          <TextHeading text="GRBRSRCGRB01" />
          <Input fieldid="exchangeratetypeno" />
          <Input fieldid="currencyno" />
          <Input fieldid="exchangedate" />
          <Input fieldid="exchangerate" />
          <TextHeading text="TABRMBPTAB04" />
          <Input fieldid="paymentprocedureno" />
          <Input fieldid="paymentmethodno" />
          <Input fieldid="paymenttermno" />
          <Input fieldid="paymentscheduleno" />
          <Input fieldid="cashdiscount" />
          <Input fieldid="prepayment" />
          <TextHeading text="delvadd" />
          <Input fieldid="deliverytermno" />
          <Input fieldid="deliverymodeno" />
          <Input fieldid="contactno" />
          <Input fieldid="deliveryaddress" />
          <Input fieldid="deliveryinstructionltxt" />
        </div>
        <div className={styles.firstColumn}>
          <TextHeading text="GRBICTPGRB01" />
          <Input fieldid="plantno" />
          <Input fieldid="storeno" />
          <TextHeading text="GRBPSPPGRB03" />
          <Input fieldid="businessareano" />
          <Input fieldid="businessunitno" />
          <Input fieldid="dtlprojectno" />
          <Input fieldid="customerno" />
        </div>
      </div>
    );
  }
}
export default BasicDataTab;
