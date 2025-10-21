import React, { Component } from "react";
import HeaderInfo from "../../component/Change/HeaderInfo";
import NavBar from "../../component/Change/NavBar";
import DeafaultFinance from "../../component/Change/DeafaultFinance";
import DisplayTabs from "../../component/Change/DisplayTabs";

interface ChangeState {
  showDisplayTabs: boolean;
}
class Change extends Component<{}, ChangeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showDisplayTabs: false,
    };
  }

  handleDisplayClick = () => {
    this.setState({ showDisplayTabs: !this.state.showDisplayTabs });
  };

  render() {
    const { showDisplayTabs } = this.state;
    return (
      <>
        <NavBar onDisplayClick={this.handleDisplayClick} />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <HeaderInfo />
          <DeafaultFinance />
          {/* Render Screen */}
          {showDisplayTabs && <DisplayTabs />}
        </div>
      </>
    );
  }
}

export default Change;
