import {
  Modal,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";

import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddClientModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Card sx={style}>
        <CardHeader
          title="Agregar Usuarios"
          action={
            <IconButton aria-label="close" onClick={handleClose}>
              <Close fontSize="large" />
            </IconButton>
          }
        />
        <CardContent>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Apellido"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Correo"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Dirección"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary">
            Agregar
          </Button>
          <Button variant="outlined" color="primary">
            Limpiar campos
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default AddClientModal;
