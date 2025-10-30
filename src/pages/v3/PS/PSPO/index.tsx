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

interface IPSPOState {
  activeTab: string;
}
interface IPSPOProps {
  showDisplayTabs: boolean;
  onDisplayClick: any;
}

class PSPO extends Component<IPSPOProps, IPSPOState> {
  
  state: IPSPOState = {
    activeTab: "basicData",
  };

  handleTabClick = (tabName: string) => {
    this.setState({ activeTab: tabName });
  };

  tabs = [
    { id: "basicData", label: "Basic Data" },
    { id: "purchaseLines", label: "Purchase Lines Items" },
    { id: "prepayment", label: "Prepayment" },
    { id: "terms", label: "Terms & Conditions" },
    { id: "controller", label: "Controller" },
    { id: "administration", label: "Administration" },
  ];

  render() {
    const { activeTab } = this.state;
    const { showDisplayTabs } = this.props;

    return (
      <section>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Header Information */}
          <Accordion>
            <AccordionItem
              header={({ state }) => (
                <div className={styles.headerInfo} onClick={this.props.onDisplayClick}>
                  {/* Icon */}
                  {!showDisplayTabs ? <Minus size={20} /> : <Plus size={20} />}
                  {/* Heading */}
                  <span>Header Information</span>
                </div>
              )}
              className={styles.accordionItem}
              initialEntered={!showDisplayTabs}
            >
              {!showDisplayTabs && (
                <>
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
                </>
              )}
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
                {this.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
                    onClick={() => this.handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
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
export default PSPO;
