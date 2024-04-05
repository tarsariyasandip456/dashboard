import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataBackList, toggleCheckbox } from '../Container/action';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const BackList = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state?.dataBackList);
  const selectedCheckboxes = useSelector(state => state?.selectedCheckboxes);

  const [gridApi, setGridApi] = useState(null);

  useEffect(() => {
    dispatch(fetchDataBackList());
  }, [dispatch]);

  useEffect(() => {
    if (gridApi && selectedCheckboxes.length > 0) {
      gridApi.forEachNode(node => {
        if (selectedCheckboxes.flat().includes(node.data.id)) {
          console.log("select",selectedCheckboxes)
          node.setSelected(true);
        }
      });
    }
  }, [gridApi, selectedCheckboxes]);
  const handleCheckboxChange = (event, productId) => {
    dispatch(toggleCheckbox(productId));
  };

  const onSelectionChanged = () => {
    if (gridApi) {
      const selectedRows = gridApi.getSelectedRows();
      const selectedProductIds = selectedRows.map(row => row.id);
      dispatch(toggleCheckbox(selectedProductIds));
    }
  };

    const columnDefs = [
    { headerName: 'Title', field: 'title' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Discount', field: 'discountPercentage' },
    { headerName: 'Rating', field: 'rating' },
    { headerName: 'Stock', field: 'stock' },
    { headerName: 'Brand', field: 'brand' },
    { headerName: 'Category', field: 'category' }
  ];

  const onGridReady = (params) => {
    setGridApi(params.api);
  };


  return (
    <div className='flex w-full h-full'>
      <div className="ag-theme-alpine w-full h-[calc(100vh-5rem)]" style={{ width: "100%" }}>
        <AgGridReact
          //getRowStyle={rowStyle}
          columnDefs={columnDefs}
          rowData={data[0]?.products}
          pagination={true}
          paginationPageSize={data[0]?.products?.length}
          onGridReady={onGridReady}
          rowSelection="multiple"
          onSelectionChanged={onSelectionChanged}
        />
      </div>
    </div>
  );
};

export default BackList;
