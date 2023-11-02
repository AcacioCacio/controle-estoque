import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { estoqueMock } from "../data/estoqueMock";
import NewProduct from "./NewProduct";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export function EstoqueTable() {
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
    { field: "createdAt", headerName: "CreatedAt", width: 200 },
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
        marginLeft: "150px",
        marginRight: "150px",
      }}
    >
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginTop: "76px",
          marginBottom: "19px",
        }}
      >
        {/*TODO -> implementar*/}
        <Typography sx={{ fontSize: 32, fontWeight: 500, paddingRight: 70 }}>
          Barra de Pesquisa
        </Typography>
        <NewProduct />
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
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
