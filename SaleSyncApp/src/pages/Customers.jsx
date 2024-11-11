import { useState } from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";

import AddClientModal from "../components/modals/AddClientModal";

const data = {
  columns: [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Apellido",
      width: 150,
    },
    {
      field: "email",
      headerName: "Correo",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Teléfono",
      width: 150,
    },
    {
      field: "address",
      headerName: "Dirección",
      width: 200,
    },
  ],
  rows: [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      email: "snow.jon@example.com",
      phone: "123456789",
      address: "Winterfell",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      email: "lannister.cersei@example.com",
      phone: "123456789",
      address: "King's Landing",
    },
  ],
};

const Customers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="min-w-full">
      <div className=" flex justify-between">
        <div className="text-3xl font-bold mb-10">Clientes</div>
        <div>
          <Button variant="contained" onClick={handleOpen}>
            Agregar
          </Button>
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
      <AddClientModal handleClose={handleClose} open={open} />
    </div>
  );
};

export default Customers;
