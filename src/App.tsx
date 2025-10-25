import React, { Component } from "react";
import Change from "@/pages/v3/PS/PSPO";
import styles from "@/index.module.scss";
import Loader from "./component/Loader";
import Error from "./component/Error";
import Drawer from "./component/Drawer";
import { connect } from "react-redux";

interface IAppProps {
  loading: boolean;
  drawerOpen: boolean;
}

class App extends Component<IAppProps> {
  render() {
    const { loading, drawerOpen } = this.props;
    return (
      <div className={styles.appWrapper}>
        {loading && <Loader />}

        {/* <Error /> */}

        <Change />

        {drawerOpen && <Drawer />}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loading: state.inputFields.loading,
  drawerOpen: state.inputFields.drawerConfig.open,
});

export default connect(mapStateToProps)(App);
