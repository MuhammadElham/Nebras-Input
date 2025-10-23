import React, { Component } from "react";
import { Download, Blocks } from "lucide-react";
import { AgGridReact } from "ag-grid-react";
import { connect } from "react-redux";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import type { IGridHeader } from "@/IGrid";

ModuleRegistry.registerModules([AllCommunityModule]);

// interfaces
interface ScreenGridProps {
  gridHeaderRedux: IGridHeader[];
}

interface ScreenGridState {
  rowData: any[];
  columnDefs: any[];
  selectedRowIndex: number | null;
  allColumnsEditable: boolean;
}

class PurchaseLineTab extends Component<ScreenGridProps, ScreenGridState> {
  constructor(props: ScreenGridProps) {
    super(props);

    this.state = {
      rowData: Array.from({ length: 30 }, () => ({})),
      columnDefs: [],
      selectedRowIndex: null,
      allColumnsEditable: false,
    };
  }

  componentDidMount(): void {
    this.generateGridData();
  }

  generateGridData(): void {
    const { gridHeaderRedux } = this.props;

    if (!gridHeaderRedux?.length) {
      console.log("No Grid Header Found!");
      return;
    }

    const columnDefs = gridHeaderRedux
      .slice()
      .sort((a, b) => a.columnposition - b.columnposition)
      .map((header) => ({
        headerName: header.label,
        field: header.fieldid,
        editable: (params: any) => {
          if (this.state.allColumnsEditable) return true;
          const columnObj = gridHeaderRedux.find((col) => col.fieldid === params.colDef.field);
          if (columnObj?.ismandatory) {
            this.setState({ allColumnsEditable: true });
            return true;
          }
          return false;
        },
        hide: !header.visible || header.linedetailfieldposition !== 0 || header.linedetailgroupboxno !== "" || header.fieldid === "opercol",
        minWidth: parseInt(header.inputlength.toString()) || header.controlwidth,
        cellDataType:
          header.applicationcontroltype === "TXT"
            ? "text"
            : header.applicationcontroltype === "AMT" || header.applicationcontroltype === "PRI"
            ? "number"
            : header.applicationcontroltype === "CHK"
            ? "boolean"
            : header.applicationcontroltype === "DTE"
            ? "date"
            : "text",
        headerClass: "custom-header",
      }));

    this.setState({ columnDefs });
  }

  handleCellClick = (params: any): void => {
    const { rowData } = this.state;
    const { gridHeaderRedux } = this.props;

    // Step 1: CurrentRow already LineID check
    const currentRow = rowData[params.rowIndex];
    if (currentRow.lineid) {
      this.setState({ selectedRowIndex: params.rowIndex });
      return;
    }

    // Step 2: Check if col is mandatory
    const columnObj = gridHeaderRedux.find((col) => col.fieldid === params.colDef.field);
    if (!columnObj?.ismandatory) {
      alert("Line ID cannot be generated because this column is not mandatory!");
      return;
    }

    // Step 3: Check previous row is empty
    if (params.rowIndex > 0) {
      const prevRow = rowData[params.rowIndex - 1];
      const isPrevRowEmpty = Object.keys(prevRow).every((val) => prevRow[val] === "" || prevRow[val] === undefined || prevRow[val] === null);

      if (isPrevRowEmpty) {
        alert("Previous row is empty! Please fill it before moving to this row");
        return;
      }
    }

    // Step 4: Generate new LineID
    console.log("rowData = ", rowData);
    const existingIds = rowData.map((row) => parseInt(row.lineid)).filter((id) => !isNaN(id));
    console.log("existingIds = ", existingIds);

    const maxId = existingIds.length > 0 ? Math.max(...existingIds) : 0;
    const lineId = (maxId + 1).toString().padStart(3, "0");

    // Step 5: Update rowData with new line ID
    const newRowData = [...rowData];
    newRowData[params.rowIndex] = {
      ...newRowData[params.rowIndex],
      lineid: lineId,
    };

    // FIX #4: setState add
    this.setState({
      rowData: newRowData,
      selectedRowIndex: params.rowIndex,
    });
  };

  // FIX #5: handleCellValueChanged
  handleCellValueChanged = (params: any): void => {
    const { rowData } = this.state;
    const { gridHeaderRedux } = this.props;

    // Check if current row already has Line ID
    const currentRow = rowData[params.rowIndex];
    if (currentRow.lineid) {
      return;
    }

    // Only validate if no Line ID exists
    const columnObj = gridHeaderRedux.find((col) => col.fieldid === params.colDef.field);
    if (!columnObj?.ismandatory) {
      alert("Line ID cannot be generated because this column is not mandatory!");
      params.node.setDataValue(params.colDef.field, params.oldValue || "");
      return;
    }

    if (params.rowIndex > 0) {
      const prevRow = rowData[params.rowIndex - 1];
      const isPrevRowEmpty = Object.keys(prevRow).every((val) => prevRow[val] === "" || prevRow[val] === undefined || prevRow[val] === null);

      if (isPrevRowEmpty) {
        alert("Previous row is empty! Please fill it before moving to this row");
        params.node.setDataValue(params.colDef.field, params.oldValue || "");
        return;
      }
    }
  };

  render() {
    const { rowData, columnDefs } = this.state;

    return (
      <div>
        {/* Ag Grid */}
        <div className="ag-theme-alpine" style={{ height: 400 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            rowHeight={45}
            rowSelection="single"
            animateRows={true}
            singleClickEdit={true}
            onCellClicked={this.handleCellClick}
            onCellValueChanged={this.handleCellValueChanged}
          />
        </div>
      </div>
    );
  }
}

// calling Redux
const mapStateToProps = (state: any) => ({
  gridHeaderRedux: state.inputFields.Grids[4]?.Headers,
});

export default connect(mapStateToProps)(PurchaseLineTab);
