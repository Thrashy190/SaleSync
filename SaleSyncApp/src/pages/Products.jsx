import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const data = {
  columns: [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "purchase_price", headerName: "Precio de Compra", width: 150 },
    { field: "sales_price", headerName: "Precio de Venta", width: 150 },
    { field: "stock", headerName: "Stock", width: 150 },
  ],
  rows: [
    {
      id: 1,
      name: "Producto 1",
      purchase_price: 100,
      sales_price: 150,
      stock: 10,
    },
    {
      id: 2,
      name: "Producto 2",
      purchase_price: 200,
      sales_price: 250,
      stock: 20,
    },
  ],
};

const Products = () => {
  return (
    <div className="min-w-full">
      <div className=" flex justify-between">
        <div className="text-3xl font-bold mb-10">Productos</div>
        <div>
          <Button variant="contained">Agregar</Button>
        </div>
      </div>
      <div className="w-full h-full">
        <DataGrid
          {...data}
          slots={{ toolbar: GridToolbar }}
          autoHeight
          disableColumnResize={false}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Products;
