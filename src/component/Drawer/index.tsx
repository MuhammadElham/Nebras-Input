import React, { Component } from "react";
import style from "@/index.module.scss";
import PurchaseLinesTab from "../Change/DisplayTabs/tabs/PurchaseLinesTab";
import { connect } from "react-redux";
import { setDrawer } from "../../redux/inputConfig";

interface IDrawerProps {
  drawerConfig: {
    open: boolean;
    position: string;
    size: string;
  };
  setDrawer: any;
}

class Drawer extends Component<IDrawerProps> {
  handleClose = () => {
    this.props.setDrawer({ open: false });
  };

  render() {
    const { drawerConfig } = this.props;

    const drawerWidth = drawerConfig.size === "lg" ? "60%" : "40%";

    return (
      <>
        <div onClick={this.handleClose} className={style.drawerBackDrop} />
        {/* Drawer */}
        <div
          className={style.drawerContainer}
          style={{
            width: drawerWidth,
            right: drawerConfig.position === "right" ? 0 : "auto",
            left: drawerConfig.position === "left" ? 0 : "auto",
            boxShadow: drawerConfig.position === "right" ? "-2px 0 8px rgba(0,0,0,0.15)" : "2px 0 8px rgba(0,0,0,0.15)",
          }}
        >
          {/* Header */}
          <div className={style.headerContainer}>
            <h2>Default Content</h2>
            <button className={style.button_close} onClick={this.handleClose}>
              X
            </button>
          </div>
          {/* Content */}
          <div>
            <PurchaseLinesTab />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  drawerConfig: state.inputFields.drawerConfig,
});

const mapDispatchToProps = {
  setDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
