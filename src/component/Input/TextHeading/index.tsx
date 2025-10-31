import React, { Component } from "react";
import { connect } from "react-redux";

interface ITextDisplay {
  text: string;
  inputField: any;
}

class TestDisplay extends Component<ITextDisplay> {
  render() {
    const { text, inputField } = this.props;
    const translation: any = inputField.ControlTranslations.find((f: any) => f.controlkey === text);

    return (
      <div>
        <h2 style={{ margin: "15px 0" }}>{translation.translation}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  inputField: state.inputFields.loggedInUserData.screenVM.Configuration.Fields,
});

export default connect(mapStateToProps)(TestDisplay);
