import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'projectName', headerName: 'Project name', width: 130 },
  { field: 'projectType', headerName: 'Project Type', width: 130 },
  { field: 'status', headerName: 'Progress', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, projectName: 'Snow', projectType: 'Jon', status: '', age: 35 },
  { id: 2, projectName: 'Lannister', projectType: 'Cersei', status: '', age: 42 },
  { id: 3, projectName: 'Lannister', projectType: 'Jaime', status: '', age: 45 },
  { id: 4, projectName: 'Stark', projectType: 'Arya', status: '', age: 16 },
  { id: 5, projectName: 'Targaryen', projectType: 'Daenerys', status: '', age: null },
  { id: 6, projectName: 'Melisandre', projectType: null, status: '', age: 150 },
  { id: 7, projectName: 'Clifford', projectType: 'Ferrara', status: '', age: 44 },
  { id: 8, projectName: 'Frances', projectType: 'Rossini', status: '', age: 36 },
  { id: 9, projectName: 'Roxie', projectType: 'Harvey', status: '', age: 65 },
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
        sx={{ border: 0 , pl: 1}}
      />
    </Paper>
  );
}
