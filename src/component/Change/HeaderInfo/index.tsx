import React, { Component } from "react";
import { Plus } from "lucide-react";
import styles from "@/index.module.scss";

class HeaderInfo extends Component {
  render() {
    return (
      <div className={styles.headerInfo}>
        <Plus size={20} />
        <span>Header information</span>
      </div>
    );
  }
}
export default HeaderInfo;
