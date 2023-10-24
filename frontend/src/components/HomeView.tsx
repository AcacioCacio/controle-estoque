import { Box, Button, IconButton, Typography } from "@mui/material";
import { estoqueMock } from "../data/estoqueMock";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NewProduct from "./NewProduct";

//Criar NAVBAR usando a logo => '../Images/Logo.svg'

export function HomeView(): JSX.Element {
  const handleEdit = (id: string) => {
    console.log("Edit", id); // TODO -> implementar feature
  };

  const handleDelete = (id: string) => {
    console.log("Delete", id); // TODO -> implementar feature
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "nome", headerName: "Product", width: 150 },
    { field: "quantidade", headerName: "Quantidade", width: 150 },
    { field: "createdAt", headerName: "CreatedAt", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      disableExport: true,
      width: 80,
      renderCell: ({ row }) => (
        <IconButton
          onClick={() => handleEdit(row.id)}
          aria-label="edit"
          color="primary"
          size="small"
        >
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      disableExport: true,
      width: 80,
      renderCell: ({ row }) => (
        <IconButton
          onClick={() => handleDelete(row.id)}
          aria-label="edit"
          color="error"
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "84px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#D9D9D9",
          paddingLeft: "15px",
        }}
      >
        <Button sx={{ marginRight: "35px" }}>
          <Typography>NAVBAR Logo aqui!!!</Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: "35px" }}
        >
          Estoque
        </Button>
        <Button variant="contained">Movimentação</Button>
      </Box>
      <Box
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginTop: "76px",
          marginBottom: "19px",
        }}
      >
        <Typography sx={{ fontSize: 32, fontWeight: 500, paddingRight: 70 }}>
          Barra de Pesquisa
        </Typography>
        <NewProduct />
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "150px",
          marginRight: "150px",
        }}
      >
        <DataGrid
          rows={estoqueMock}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </Box>
  );
}
