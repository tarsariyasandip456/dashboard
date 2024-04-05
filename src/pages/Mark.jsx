import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataMarkList } from '../Container/action';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
const Mark=()=>{
const dispatch = useDispatch();
const data = useSelector(state => state?.data);
const isLoading = useSelector(state => state?.isLoading);
const error = useSelector(state => state?.error);

useEffect(() => {
  console.log("data",data[0]?.users)
   dispatch(fetchDataMarkList());
}, [dispatch]);

if (isLoading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error}</p>;
}
const columnDefs = [
  { headerName: 'ID', field: 'id' },
  { headerName: 'First Name', field: 'firstName' },
  { headerName: 'Last Name', field: 'lastName' },
  { headerName: 'Age', field: 'age' },
  { headerName: 'Gender', field: 'gender' },
  { headerName: 'Email', field: 'email' },
  { headerName: 'Phone', field: 'phone' },
  { headerName: 'Username', field: 'username' },
];
return (
  <div className='flex w-full h-full'>
      <div className="ag-theme-alpine w-full h-[calc(100vh-5rem)]" style={{width:"100%"}}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data[0]?.users}
        pagination={true}
        paginationPageSize={data[0]?.users?.length}
      />
      </div>
  
  </div>
);
}
export default Mark