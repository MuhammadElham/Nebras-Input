import React, { Component } from "react";
import PSPOWithFormUI from "@/utils/base-utils/form-ui";
import styles from "@/index.module.scss";
import Loader from "./component/Loader";
import Error from "./component/Error";
import Drawer from "./component/Drawer";
import { connect } from "react-redux";

interface IAppProps {
  loading: boolean;
}

class App extends Component<IAppProps> {
  render() {
    const { loading } = this.props;

    return (
      <div className={styles.appWrapper}>
        {loading && <Loader />}

        {/* <Error /> */}

        <PSPOWithFormUI />

        <Drawer />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loading: state.inputFields.loading,
});

export default connect(mapStateToProps)(App);
