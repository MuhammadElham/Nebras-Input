import { Component } from "react";
import styles from "@/index.module.scss";
import { Building, Check, Monitor, RotateCcw, CircleX } from "lucide-react";

interface IInnerWrappedState {
  showDisplayTabs: boolean;
}

const withFormUI = (WrappedComponent: any) => {
  return class InnerWrapped extends Component<{}, IInnerWrappedState> {
    state: IInnerWrappedState = {
      showDisplayTabs: false,
    };

    handleDisplayClick = () => {
      this.setState((prevState) => ({ showDisplayTabs: !prevState.showDisplayTabs }));
    };
    render() {
      return (
        <header>
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
          {/* Wrapper */}
          <WrappedComponent />
        </header>
      );
    }
  };
};
export default withFormUI;
