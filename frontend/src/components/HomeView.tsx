import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { estoqueMock } from "../data/estoqueMock";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoNavbar from '../Images/Logo.svg';
import NewProduct from './NewProduct'; // Supondo a existência de um componente NewProduct


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
    <Box sx={{ width: '100%', }}>
{/* height: "84px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "#D9D9D9", paddingLeft: "15px" */}
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='LogoNavBar'>
              <img src={LogoNavbar} alt='Logo' style={{ width: '40px', height: '40px' }} />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Sistema de Controle
            </Typography>
            <Stack direction='row' spacing={2}>
              <Button color='inherit'>Inicio</Button>
              <Button color='inherit'>Estoque</Button>
              <Button color='inherit'>Movimentações</Button>
              <Button color='inherit'>Sobre</Button>
            </Stack>
          </Toolbar>
        </AppBar>

        <Typography sx={{ fontSize: 32, fontWeight: 500, paddingRight: 70 }}>
          Barra de Pesquisa
        </Typography>
        <NewProduct />
      </div>

      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '150px',
          marginRight: '150px',
        }}
      >
        <div style={{ width: '100vw', height: '100vh' }}>
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
        </div>
      </Box>
    </Box>
  );
}