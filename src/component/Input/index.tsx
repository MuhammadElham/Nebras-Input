import React, { Component } from "react";
import inputStyles from "@/index.module.scss";
import { connect } from "react-redux";
// import { IReducerProps } from "@/utils/reducers-utils/ISlices"; // ?
// import { mapDispatchToProps, mapStateToProps } from "@/utils/reducers-utils/reducer-util-func";
import Icon from "../Icon/index"; // make it dummy
import { fetchHelpData } from "@/utils/global-utils"; // make it dummy
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// custom interface
interface ILoggeedInUserData {
  screenVM: { // ?
    docKey: string;
  };
}

interface IInputProps extends IReducerProps { 
  fieldid: string;
  isCriteriaPanel?: boolean;
  data?: any[];
  item?: any;
  onChange?: (fieldid: string, value: string) => void;
  inputFields?: any;
  loggedInUserData: ILoggeedInUserData; // custom
}

interface IInputState {
  loading: boolean;
  success: boolean;
  errors: { [key: string]: boolean };
}

class Input extends Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      loading: false,
      success: false,
      errors: {},
    };
  }
  // ?
  async handleOpenHelpPanel(fieldid: string, helpwhere: string, displayhelpobject: string, processcode: string) {
    this.setState({ loading: true });
    await fetchHelpData(fieldid, helpwhere, displayhelpobject, processcode); // ?
    // console.log("Fetch Help Data = ", fetchHelpData); // i render dummy data
    this.setState({ loading: false });

    const { drawerConfig, handleDrawer } = this.props; // ?
    // console.log("Drawer Config = ", drawerConfig); // -- undefined
    // console.log("Handle Config = ", handleDrawer); // -- undefined

    handleDrawer({
      showSidePanelData: !drawerConfig.defaultDrawerConfig.open,
      defaultDrawerConfig: {
        open: !drawerConfig.defaultDrawerConfig.open,
        position: drawerConfig.defaultDrawerConfig.open ? "" : "right",
        size: drawerConfig.defaultDrawerConfig.open ? "" : "lg",
      },
    });
  }

  render() {
    const { isCriteriaPanel, loggedInUserData, inputFields, fieldid, item: providedItem } = this.props;
    // console.log("this.props = ", this.props);
    // console.log("providedItem = ", providedItem); // ?
    // console.log("isCriteriaPanel = ", isCriteriaPanel); // ?

    // console.log("logged In User Data = ", loggedInUserData);

    if (!inputFields || !loggedInUserData) return;

    const item =
      providedItem ||
      inputFields?.inputs?.find((item: any) => {
        return item?.fieldid === fieldid;
      });

    // console.log("loggedInUserData = ", loggedInUserData);
    // console.log("item:", item);

    if (!item) return;

    const {
      label,
      visible,
      inputlength,
      controltype,
      helpwhere,
      displayhelpobject,
      ismandatorybeforecreate,
      ismandatoryaftercreate,
      isDisabled,
      customError,
      isError,
      defaultValue,
      isChangeable, // ?
    } = item;
    const { docKey } = loggedInUserData.screenVM || {};
    // console.log("docKey = ", docKey);
    // console.log("changeAble = ", isChangeable);

    // const styledInput = docKey == fieldid && !providedItem;
    const styledInput = Array.isArray(docKey) ? docKey.includes(fieldid) && !providedItem : docKey == fieldid && !providedItem; // custom made 
    // console.log("styledInput = ", styledInput);
    const isMandatory = ismandatorybeforecreate || ismandatoryaftercreate;
    const inputType = controltype === "TXT" ? "text" : controltype === "DTE" ? "DTE" : "number";

    // console.log("isCriteriaPanel = ", isCriteriaPanel); // ?
    const inputClass = `${
      isCriteriaPanel
        ? inputStyles["input-default"]
        : inputlength <= 8
        ? inputStyles["input-xs"]
        : inputlength <= 15 // style
        ? inputStyles["input-sm"]
        : inputlength <= 25
        ? inputStyles["input-md"]
        : inputStyles["input-lg"]
    } ${styledInput ? inputStyles.dockeyOverrideStyles : ""}`; // adding more styles

    // console.log("inputClass = ", inputClass); // only return className

    // why using these style
    const inputContainerStylesOverrides = {
      borderRight: helpwhere || displayhelpobject ? "1px solid rgb(190, 190, 190)" : docKey == fieldid ? "" : "none",
      color: styledInput ? "7954e5" : "",
      border: isMandatory && isError ? "1px solid red" : styledInput ? "none" : "1px solid rgb(190, 190, 190)",
      borderRadius: isMandatory && isError ? "4px" : "",
    };
    // console.log("inputContainerStylesOverrides = ", inputContainerStylesOverrides);

    // why using these style
    const inputStylesOverrides = {
      backgroundColor: isMandatory && isError ? "rgba(255, 0, 0, 0.1)" : "",
    };

    // there was returning on behalf of visible but now it's not dependent on the visible prop
    return (
      <>
        <div className={`${inputStyles.inputContainer} ${styledInput && inputStyles.docKeyContainer} `} key={fieldid}>
          {true && (
            // docKey !== fieldid
            <label
              className={` ${styledInput ? `${inputStyles.dockeyLabel}  font-sm fw-300` : ""}  font-xs font-R-SemiBold border-light`}
              // style={{ width: "24%" }} commenting 
            >
              {label}
              {isMandatory && (
                <span className={inputStyles.requiredSterik} style={{ color: "red" }}>
                  *
                </span>
              )}
            </label>
          )}
          {controltype === "DTE" ? (
            <DatePicker
              toggleCalendarOnIconClick={true}
              calendarIconClassName={inputStyles.datePickerIcon}
              className={`${inputStyles.datePickerComponent} ${
                isMandatory && isError && inputStyles.datePickerComponentOverride
              }  font-sm  font-R-Regular ${isMandatory && isError ? "backgroundColorError" : ""}`}
              showIcon
              // todayButton="Today"
              selected={defaultValue || new Date()}
              onChange={(e) => {
                if (isChangeable) {
                  const isoDate = e?.toISOString();
                  // console.log("isoDate = ", isoDate);
                  this.props.handleChangeInputFields({ fieldid, newValue: isoDate }); // ?
                }
              }}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                  <mask id="ipSApplication0">
                    <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                      <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                      <path
                        fill="#fff"
                        d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                      ></path>
                    </g>
                  </mask>
                  <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSApplication0)"></path>
                </svg>
              }
            />
          ) : (
            <>
              {inputlength >= 300 ? (
                <textarea
                  onChange={(e) => isChangeable && this.props.handleChangeInputFields({ fieldid, newValue: e.target.value })}
                  required={isMandatory}
                  name={fieldid}
                  value={defaultValue}
                  className={`${isMandatory && isError && inputStyles.textAreaOverride} font-sm  font-R-Regular`}
                />
              ) : (
                // input length less than 300
                <span style={{ position: "relative", ...inputContainerStylesOverrides }}>
                  <input
                    data-rowuid=""
                    maxLength={inputlength}
                    type={inputType}
                    name={fieldid}
                    // value={defaultValue}
                    // value={defaultValue}
                    autoComplete="off"
                    disabled={isDisabled}
                    className={`font-sm font-R-Regular ${inputClass}`} // inputClass have only className
                    style={inputStylesOverrides}
                    onChange={(e) => isChangeable && this.props.handleChangeInputFields({ fieldid, newValue: e.target.value })}
                    required={isMandatory}
                  />
                  {(helpwhere !== "" || displayhelpobject !== "") && (
                    <Icon
                      name="search-ico-fill"
                      size={16}
                      customStyles={{
                        position: "absolute",
                        right: "5px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                      customEventhandler={() => this.handleOpenHelpPanel(fieldid, helpwhere, displayhelpobject, item.processcode)}
                    />
                  )}
                </span>
              )}
            </>
          )}
          {/* {isMandatory && !defaultValue && isError && (
            <span style={{ width: "24%", color: "red" }} className="font-xs font-R-SemiBold">
              {customError || "Field is Required"}
            </span>
          )} */}
        </div>
      </>
    );
    //  : null;
  }
}
const mapStateToProps = (state: any) => ({
  inputFields: state.inputFields.inputFields,
  loggedInUserData: state.inputFields.loggedInUserData,
});
export default connect(mapStateToProps)(Input);

// export default connect(mapStateToProps, mapDispatchToProps)(Input);
// export default Input;
