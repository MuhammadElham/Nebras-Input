import React, { Component } from "react";
import styles from "@/index.module.scss";
import BasicDataTab from "./tabs/BasicDataTab";
import PurchaseLineTab from "./tabs/PurchaseLinesTab";
import PrepaymentTab from "./tabs/PrepaymentTab";
import TermsTab from "./tabs/TermsTab";
import ControllerTab from "./tabs/ControllerTab";
import AdministrationTab from "./tabs/AdministrationTab";

interface DisplayTabState {
  activeTab: string;
}

class DisplayTabs extends Component<{}, DisplayTabState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeTab: "basicData",
    };
  }

  handleTabClick = (tabName: string) => {
    this.setState({ activeTab: tabName });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className={styles.accordionContentContainer}>
        <div>
          <button className={`${styles.tab} ${activeTab === "basicData" ? styles.activeTab : ""}`} onClick={() => this.handleTabClick("basicData")}>
            Basic Data
          </button>
          <button
            className={`${styles.tab} ${activeTab === "purchaseLines" ? styles.activeTab : ""}`}
            onClick={() => this.handleTabClick("purchaseLines")}
          >
            Purchase Lines Items
          </button>
          <button className={`${styles.tab} ${activeTab === "prepayment" ? styles.activeTab : ""}`} onClick={() => this.handleTabClick("prepayment")}>
            Prepayment
          </button>
          <button className={`${styles.tab} ${activeTab === "terms" ? styles.activeTab : ""}`} onClick={() => this.handleTabClick("terms")}>
            Terms & Conditions
          </button>
          <button className={`${styles.tab} ${activeTab === "controller" ? styles.activeTab : ""}`} onClick={() => this.handleTabClick("controller")}>
            Controller
          </button>
          <button
            className={`${styles.tab} ${activeTab === "administration" ? styles.activeTab : ""}`}
            onClick={() => this.handleTabClick("administration")}
          >
            Administration{" "}
          </button>
        </div>
        {/* Tab Content */}
        <div>
          {activeTab === "basicData" && <BasicDataTab />}
          {activeTab === "purchaseLines" && <PurchaseLineTab />}
          {activeTab === "prepayment" && <PrepaymentTab />}
          {activeTab === "terms" && <TermsTab />}
          {activeTab === "controller" && <ControllerTab />}
          {activeTab === "administration" && <AdministrationTab />}
        </div>
      </div>
    );
  }
}

export default DisplayTabs;
