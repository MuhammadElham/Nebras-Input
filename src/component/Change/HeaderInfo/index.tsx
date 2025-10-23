import React, { Component } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "@/index.module.scss";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import Input from "../../Input";
import TestDisplay from "../../Input/TextHeading";

class HeaderInfo extends Component {
  render() {
    return (
      <Accordion>
        <AccordionItem
          header={({ state }) => (
            <div className={styles.headerInfo}>
              {/* Icon */}
              {state.isEnter ? <Minus size={20} /> : <Plus size={20} />}
              {/* Heading */}
              <span>Header Information</span>
            </div>
          )}
          className={styles.accordionItem}
        >
          {/* Content */}
          <div className={`${styles.accordionContentContainer} ${styles.accordionContentContainerGrids}`}>
            {/* Left Column */}
            <div className={styles.formColumn}>
              <Input fieldid="purchaseorderno" />
              <Input fieldid="purchasetype" />
              <TestDisplay text="GRBPSPOGRB01" />
              <Input fieldid="purchaseaccount" />
              <Input fieldid="invoiceaccount" />
              <Input fieldid="invoiceaddressid" />
              <TestDisplay text="grpdatesEPEE" />
              <Input fieldid="postingdate" />
              <Input fieldid="requireddate" />
              <Input fieldid="notes" />
            </div>

            {/* Right Column */}
            <div className={styles.formColumn}>
              <TestDisplay text="GRBPSPOGRB11" />
              <Input fieldid="purchaseorganizationno" />
              <Input fieldid="purchasegroupno" />
              <Input fieldid="purchaseordertypeno" />
              <TestDisplay text="GRBPSPOGRB12" />
              <Input fieldid="documentreasonno" />
              <Input fieldid="purchasereasonfor" />
              <Input fieldid="requestor" />
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    );
  }
}
export default HeaderInfo;
