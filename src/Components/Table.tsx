import "../Common/css/table.css"
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'startDate', headerName: 'Start Date', width: 200 },
  { field: 'projectName', headerName: 'Project Name', width: 240 },
  { field: 'projectType', headerName: 'Project Type', width: 240 },  
  { field: 'price',  headerName: 'Price',   width: 150, },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => {
      switch (params.value) {
        case '0':
          return <StatusCard_0 />;
        case '1':
          return <StatusCard_1 />;
        case '2':
          return <StatusCard_2 />;
        default:
          return null;
      }
    },
  }
];

const rows = [
  { id: 1, startDate: '2024-01-23', projectName: 'Travel Ceylon', projectType: 'Website', status: '2', price: "$350" },
  { id: 2, startDate: '2021-05-14', projectName: 'Cell X', projectType: 'Cross Platform', status: '2', price: "$1100" },
  { id: 3, startDate: '2024-08-06', projectName: 'Cric Log', projectType: 'Windows form', status: '1', price: "$700" },
  { id: 4, startDate: 'Not start yet', projectName: 'Shopping Mart', projectType: 'Website', status: '0', price: "$800" },
  { id: 5, startDate: '2018-11-09', projectName: 'Film Aura', projectType: 'Website', status: '2', price: "$600" },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 , pl: 1}}
      />
    </Paper>
  );
}


export function StatusCard_0(){
  return(
    <div className="status-card-outer new">
      <span className="status-card-text newT">New</span>
    </div>
  )
}

export function StatusCard_1(){
  return(
    <div className="status-card-outer ongoing">
      <span className="status-card-text ongoingT">Ongoing</span>
    </div>
  )
}

export function StatusCard_2(){
  return(
    <div className="status-card-outer completed">
      <span className="status-card-text completedT">Completed</span>
    </div>
  )
}
