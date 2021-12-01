import "./App.css";
import MaterialTable from "material-table";
import React, { useState } from "react";

function App() {
  const [tabledata, setTabledata] = useState([
    {
      brid: "GXXXXXX",
      squadname: "Elapids",
      leavetype: "Casual",
      fromdate: new Date().toDateString(),
      todate: new Date().toDateString(),
      emptype: "Permanent",
    },
    {
      brid: "GXXXXXY ",
      squadname: "Mambas",
      leavetype: "Sick",
      fromdate: new Date().toDateString(),
      todate: new Date().toDateString(),
      emptype: "SI",
    },
  ]);
  const columns = [
    { title: "BRID", field: "brid" },
    { title: "Squad Name", field: "squadname" },
    { title: "Leave Type", field: "leavetype" },
    { title: "From", field: "fromdate" },
    { title: "To", field: "todate" },
    { title: "Emp Type", field: "emptype" },
  ];
  return (
    <div className="App">
      <h1>Leave Report Generator</h1>
      <br></br>
      <MaterialTable
        editable={{
          onRowAdd:(newRow) => new Promise((resolve, reject)=>{
            setTabledata([...tabledata, newRow])
            setTimeout(()=>resolve(),500)
          }),
          onRowUpdate:(newRow, oldRow) => new Promise((resolve, reject)=>{
            const updatedData = [...tabledata]
            updatedData[oldRow.tableData.id]=newRow
            setTabledata(updatedData)
            setTimeout(()=>resolve(),500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve,reject)=>{
            const updatedData = [...tabledata]
            updatedData.splice(selectedRow.tableData.id,1)
            setTabledata(updatedData)
            setTimeout(()=>resolve(),500)
          })
        }}
        columns={columns}
        data={tabledata}
        title="Holiday Planner Report"
        options={{
          searchAutoFocus: true,
          filtering: true,
          paginationType: "stepped",
          exportButton: true,
          exportFileName: "Holiday_Team_Report",
          grouping:true,
          columnsButton: true,
          rowStyle:{background:"#f5f5f5"},
          headerStyle:{background:"#4eaefc"}
        }}
      />
    </div>
  );
}

export default App;
