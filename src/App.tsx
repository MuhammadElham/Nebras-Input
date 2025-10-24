import React, { Component } from "react";
import Change from "@/pages/v3/PS/PSPO";
import styles from "@/index.module.scss";
import Loader from "./component/Loader";
import Error from "./component/Error";
import Drawer from "./component/Drawer";

class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        
        {/* <Loader /> */}

        {/* <Error /> */}

        <Change />

        {/* <Drawer /> */}
      
      </div>
    );
  }
}

export default App;
