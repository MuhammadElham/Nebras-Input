import { Component } from "react";
import PSPO from "../../pages/v3/PS/PSPO";
import styles from "@/index.module.scss";
import { Building, Check, Monitor, RotateCcw, CircleX } from "lucide-react";

interface IInnerWrapped {
  showDisplayTabs: boolean;
}

const withFormUI = (WrapperComponent: any) => {
  return class InnerWrapped extends Component<{}, IInnerWrapped> {
    constructor(props: {}) {
      super(props);
      this.state = {
        showDisplayTabs: false,
      };
    }
    handleDisplayClick = () => {
      this.setState((prevState) => ({ showDisplayTabs: !prevState.showDisplayTabs })); // if(displayButton) clicked ? showDisplay : openHeader
    };
    render() {
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
          {/*  */}
          <WrapperComponent {...this.props} showDisplayTabs={this.state.showDisplayTabs} onDisplayClick={this.handleDisplayClick} />
        </section>
      );
    }
  }
};
export default withFormUI(PSPO);
