import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import React, { Component } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "@/index.module.scss";
import Input from "../../../../component/Input";
import TestDisplay from "../../../../component/Input/TextHeading";
import TextHeading from "../../../../component/Input/TextHeading";
import RandomGrid from "../../../../component/RandomGrid";

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

  // <--- Tabs code --->
  basicDataTab = () => {
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
  };

  purchaseLinesTab = () => {
    return (
      <div>
        <RandomGrid />
      </div>
    );
  };

  prepaymentTab = () => {
    return (
      <div>
        <h1>Prepayment Tab</h1>
      </div>
    );
  };

  termsTab = () => {
    return (
      <div>
        <h1>Terms and Condition</h1>
      </div>
    );
  };

  controllerTab = () => {
    return (
      <div>
        <h1>Controller Tab</h1>
      </div>
    );
  };

  administrationTab = () => {
    return (
      <div>
        <h1>Administration Tab</h1>
      </div>
    );
  };

  tabs = [
    { id: "basicData", label: "Basic Data", content: this.basicDataTab },
    { id: "purchaseLines", label: "Purchase Lines Items", content: this.purchaseLinesTab },
    { id: "prepayment", label: "Prepayment", content: this.prepaymentTab },
    { id: "terms", label: "Terms & Conditions", content: this.termsTab },
    { id: "controller", label: "Controller", content: this.controllerTab },
    { id: "administration", label: "Administration", content: this.administrationTab },
  ];

  render() {
    const { activeTab } = this.state;
    const { showDisplayTabs } = this.props;

    const ActiveComponent: any = this.tabs.find((t: any) => t.id == this.state.activeTab)?.content;

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
              <div className={styles.tabContent}>{ActiveComponent && ActiveComponent()}</div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default PSPO;
