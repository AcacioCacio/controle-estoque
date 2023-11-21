import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Searchbar } from "./Searchbar";
import { estoqueMock } from "../data/estoqueMock";
import DeleteIcon from "@mui/icons-material/Delete";
import NewProduct from "./NewProduct";
import UpdateProduct from "./UpdateProduct";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from 'notistack';
import { format } from "path";
import { ptBR } from "@mui/x-date-pickers/locales/ptBR";

export function EstoqueTable() {
  const handleSearch = (search?: string) => {
    // TODO -> implementar busca
  };

  const meuTexto = 'Estoque';

  const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const confirm = useConfirm();

  const handleDelete = async () => {
    try {
      await confirm({
        title: "Deseja excluir mesmo?",
        content: (
          <Typography>Ao confirmar, o produto será excluído</Typography>
        ),
        confirmationText: "Excluir",
        confirmationButtonProps: {
          color: "error",
          variant: "contained",
          sx: {
            mb: 2,
            mr: 2,
          },
        },
        cancellationText: "Cancelar",
        cancellationButtonProps: {
          variant: "outlined",
          sx: {
            mb: 2,
            mr: 1,
          },
        },
      });

      enqueueSnackbar('The product has been deleted!', {variant: 'success'})

    } catch (e) {
      console.log("Erro", e);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product", minWidth: 150, flex: 1 },
    { field: "quant", headerName: "Quantidade", minWidth: 150, flex: 1 },
    { field: "date", headerName: "CreatedAt", type:'date', width: 600 },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      disableExport: true,
      width: 80,
      renderCell: ({row}) => <UpdateProduct />,
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      disableExport: true,
      width: 80,
      renderCell: ({row}) => 
      <IconButton
        onClick={handleDelete}
        aria-label="delete"
        color="error"
        size="small"
      >
          <DeleteIcon />
      </IconButton>
    },
  ];

  return (
    <Box sx={{ mx: 10 }}>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",  
          marginTop: "30px",
          fontSize: "30px",
        }}
      >
        <div>
          <p>{meuTexto}</p>
        </div>
      </Box>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginTop: "5px",
          marginBottom: "19px",
        }}
      >
        <Searchbar
          placeholder="Procurar por um produto"
          onSearch={handleSearch}
          disabled={false}
        />
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
