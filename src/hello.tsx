import React, {useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {GridApi, ColDef} from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const columnDefs: ColDef[] = [{
  headerName: "Make", field: "make", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Model", field: "model", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Price", field: "price", sortable: true, filter: true, editable: true, width: 100
}]

type Data = {
  make: string,
  model: string,
  price: number
};

const rowData: Data[] = [{
    make: "Toyota", model: "Celica", price: 35000
  }, {
    make: "Ford", model: "Mondeo", price: 32000
  }, {
    make: "Porsche", model: "Boxter", price: 72000
  }]
;

export default function Hello() {
  const [gridApi, setGridApi] = useState<GridApi>(null as any)

  function onCellValueChanged() {
    const allRowData: Data[] = [];
    gridApi.getModel().forEachNode(node => {
      allRowData.push(node.data);
    })
    console.log('### allRowData', allRowData);
  }

  return <div>
    <h1>Hello React-AgGrid</h1>
    <div
      className="ag-theme-balham"
      style={{
        height: '300px',
        width: '600px'
      }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowSelection='multiple'
        rowData={rowData}
        onGridReady={params => setGridApi(params.api)}
        onCellValueChanged={onCellValueChanged}
      >
      </AgGridReact>
    </div>
  </div>
};
