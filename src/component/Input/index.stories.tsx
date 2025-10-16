import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Input from "./index";

const storyInitialState = {
  inputFields: {
    inputs: [
      {
        fieldcatalogno: "001091",
        cocode: "",
        processcode: "PSPO",
        transactioncode: "",
        userid: "",
        inputlength: 15,
        controlwidth: 120,
        labelwidth: 120,
        anchor: "",
        tabindex: 0,
        controltype: "TXT",
        applicationdatatype: "STR",
        ontooltip: false,
        onlabel: false,
        visible: 1,
        disable: 0,
        enbaftrclick: 1,
        attachmentrequired: false,
        quickfactrequired: false,
        quickfacts: null,
        opendocrequired: false,
        opendoc: null,
        helpobject: "",
        reportobject: "",
        flexobject: "",
        fieldid: "purchaseorderno",
        dropdown: 0,
        helpwhere: "AND purchasepohdr.cocode = <<cocode>>",
        displaytexttable: "",
        baseonsql: false,
        baseontable: false,
        displayhelpobject: "HELPPSPO_00",
        fielddisplay: "",
        fieldwhere: "",
        sql: "",
        label: "Purchase Order",
        helpobjectlang: "",
        reportobjectlang: "",
        flexobjectlang: "",
        defaultvalue: "",
        ismandatorybeforecreate: false,
        ismandatoryaftercreate: false,
        subform: false,
        toolbarkey: "",
        langno: "EN",
        financialdimensionrequired: false,
      },
      // date
      {
        fieldcatalogno: "001091",
        cocode: "",
        processcode: "PSPO",
        transactioncode: "",
        userid: "",
        inputlength: 10,
        controlwidth: 140,
        labelwidth: 120,
        anchor: "",
        tabindex: 0,
        controltype: "DTE",
        applicationdatatype: "DAT",
        ontooltip: false,
        onlabel: false,
        visible: 1,
        disable: 0,
        enbaftrclick: 1,
        attachmentrequired: false,
        quickfactrequired: false,
        quickfacts: null,
        opendocrequired: false,
        opendoc: null,
        helpobject: "",
        reportobject: "",
        flexobject: "",
        fieldid: "postingdate",
        dropdown: 0,
        helpwhere: "",
        displaytexttable: "",
        baseonsql: false,
        baseontable: false,
        displayhelpobject: "",
        fielddisplay: "",
        fieldwhere: "",
        sql: "",
        label: "Posting Date",
        helpobjectlang: "",
        reportobjectlang: "",
        flexobjectlang: "",
        defaultvalue: "",
        ismandatorybeforecreate: true,
        ismandatoryaftercreate: false,
        subform: false,
        toolbarkey: "",
        langno: "EN",
        financialdimensionrequired: false,
      },
      //   notes
      {
        fieldcatalogno: "001091",
        cocode: "",
        processcode: "PSPO",
        transactioncode: "",
        userid: "",
        inputlength: 10000,
        controlwidth: 750,
        labelwidth: 120,
        anchor: "",
        tabindex: 0,
        controltype: "TXT",
        applicationdatatype: "STR",
        ontooltip: false,
        onlabel: false,
        visible: 1,
        disable: 0,
        enbaftrclick: 1,
        attachmentrequired: false,
        quickfactrequired: false,
        quickfacts: null,
        opendocrequired: false,
        opendoc: null,
        helpobject: "",
        reportobject: "",
        flexobject: "",
        fieldid: "notes",
        dropdown: 0,
        helpwhere: "",
        displaytexttable: "",
        baseonsql: false,
        baseontable: false,
        displayhelpobject: "",
        fielddisplay: "",
        fieldwhere: "",
        sql: "",
        label: "Notes",
        helpobjectlang: "",
        reportobjectlang: "",
        flexobjectlang: "",
        defaultvalue: "",
        ismandatorybeforecreate: false,
        ismandatoryaftercreate: false,
        subform: false,
        toolbarkey: "",
        langno: "EN",
        financialdimensionrequired: false,
      },
    ],
  },
  loggedInUserData: {
    screenVM: {
      docKey: ["purchaseorderno", "postingdate", "notes"],
    },
  },
};

const storyReducer = (state = storyInitialState) => state;

const store = configureStore({
  reducer: {
    inputFields: storyReducer,
  },
});

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args: any) => (
  <Provider store={store}>
    <Input {...args} />
  </Provider>
);

export const PurchaseOrderNo = Template.bind({});
PurchaseOrderNo.args = {
  fieldid: "purchaseorderno",
};

export const postingDate = Template.bind({});
postingDate.args = {
  fieldid: "postingdate",
};

export const Notes = Template.bind({});
Notes.args = {
  fieldid: "notes",
};
