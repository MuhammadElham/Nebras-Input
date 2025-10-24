import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import React, { Component } from "react";
import { Plus, Minus, Building, Check, Monitor, RotateCcw, CircleX } from "lucide-react";
import styles from "@/index.module.scss";
import Input from "../../../../component/Input";
import TestDisplay from "../../../../component/Input/TextHeading";
import BasicDataTab from "../../../../component/Change/DisplayTabs/tabs/BasicDataTab";
import PurchaseLinesTab from "../../../../component/Change/DisplayTabs/tabs/PurchaseLinesTab";
import PrepaymentTab from "../../../../component/Change/DisplayTabs/tabs/PrepaymentTab";
import TermsTab from "../../../../component/Change/DisplayTabs/tabs/TermsTab";
import ControllerTab from "../../../../component/Change/DisplayTabs/tabs/ControllerTab";
import AdministrationTab from "../../../../component/Change/DisplayTabs/tabs/AdministrationTab";

interface IChangeState {
  activeTab: string;
  showDisplayTabs: boolean;
}

class Change extends Component<{}, IChangeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeTab: "basicData",
      showDisplayTabs: false,
    };
  }
  // Display
  handleDisplayClick = () => {
    this.setState({ showDisplayTabs: !this.state.showDisplayTabs });
  };
  // Tab
  handleTabClick = (tabName: string) => {
    this.setState({ activeTab: tabName });
  };

  render() {
    const { activeTab, showDisplayTabs } = this.state;

    return (
      <section>
        {/* NavBar */}
        <div className={styles.changeContainer}>
          <div className={styles.navBar}>
            <div className={styles.iconText}>
              <Building size={22} />
              <span>01</span>
            </div>

            <h2>Change Purchase Order</h2>
          </div>
          {/* buttons */}
          <div className={styles.buttonGroup}>
            <button className={styles.btn}>
              <Check size={20} />
              Validate
            </button>
            <button className={styles.btn} onClick={this.handleDisplayClick}>
              <Monitor size={20} />
              Display
            </button>
            <button className={styles.btn}>
              <RotateCcw size={20} />
              Reload
            </button>
            <button className={styles.btn}>
              <CircleX size={20} />
              Cancel
            </button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Header Information */}
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

          {/* DefaultFinance */}
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

          {/* DisplayCode */}
          {showDisplayTabs && (
            <div className={styles.tabHeaderContainer}>
              <div className={styles.tabHeaders}>
                <button
                  className={`${styles.tab} ${activeTab === "basicData" ? styles.activeTab : ""}`}
                  onClick={() => this.handleTabClick("basicData")}
                >
                  Basic Data
                </button>
                <button
                  className={`${styles.tab} ${activeTab === "purchaseLines" ? styles.activeTab : ""}`}
                  onClick={() => this.handleTabClick("purchaseLines")}
                >
                  Purchase Lines Items
                </button>
                <button
                  className={`${styles.tab} ${activeTab === "prepayment" ? styles.activeTab : ""}`}
                  onClick={() => this.handleTabClick("prepayment")}
                >
                  Prepayment
                </button>
                <button className={`${styles.tab} ${activeTab === "terms" ? styles.activeTab : ""}`} onClick={() => this.handleTabClick("terms")}>
                  Terms & Conditions
                </button>
                <button
                  className={`${styles.tab} ${activeTab === "controller" ? styles.activeTab : ""}`}
                  onClick={() => this.handleTabClick("controller")}
                >
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
              <div className={styles.tabContent}>
                {activeTab === "basicData" && <BasicDataTab />}
                {activeTab === "purchaseLines" && <PurchaseLinesTab />}
                {activeTab === "prepayment" && <PrepaymentTab />}
                {activeTab === "terms" && <TermsTab />}
                {activeTab === "controller" && <ControllerTab />}
                {activeTab === "administration" && <AdministrationTab />}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}
export default Change;
