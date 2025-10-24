import React, { Component } from "react";
import { Building, Check, Monitor, RotateCcw, CircleX } from "lucide-react";
import styles from "@/index.module.scss";

interface IPropsNavBar {
  onDisplayClick: any;
}

class NavBar extends Component<IPropsNavBar> {
  
  render() {

    const { onDisplayClick } = this.props;

    return (
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
          <button className={styles.btn} onClick={onDisplayClick}>
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
    );
  }
}

export default NavBar;
