import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import React, { Component } from "react";
import styles from "@/index.module.scss";
import { Minus, Plus } from "lucide-react";

class DeafaultFinance extends Component {
  render() {
    return (
      <Accordion>
        <AccordionItem
          header={({ state }) => (
            <div className={styles.headerInfo}>
              {state.isEnter ? <Minus size={20} /> : <Plus size={20} />}
              <span>Default Financial dimension</span>
            </div>
          )}
          className={styles.accordionItem}
        ></AccordionItem>
      </Accordion>
    );
  }
}
export default DeafaultFinance;
