import React, { Component } from "react";
import styles from "@/index.module.scss";
import Tabs from "./Tabs";

class DisplayTabs extends Component {
  render() {
    return (
      <div className={styles.accordionContentContainer}>
        <Tabs />
      </div>
    );
  }
}
export default DisplayTabs;
