import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Searchbar } from "./Searchbar";
import DeleteIcon from "@mui/icons-material/Delete";
import NewProduct from "./NewProduct";
import UpdateProduct from "./UpdateProduct";
import { useConfirm } from "material-ui-confirm";
import useEstoqueList from "../hooks/useProductsList";
import useDeleteProduct from "../hooks/useDeleteProducts";

export function EstoqueTable() {
  const { produtos, setProdutos, produtosTotal, isLoading, listRefresh } =
    useEstoqueList();

  const handleSearch = (search?: string) => {
    if (search) {
      setProdutos(
        produtos.filter((produto) =>
          produto.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    } else {
      listRefresh();
    }
  };

  const deleteProduct = useDeleteProduct();

  const meuTexto = "Estoque";

  const confirm = useConfirm();

  const handleDelete = async (id: string) => {
    try {
      await confirm({
        title: "Deseja excluir mesmo?",
        content: <Typography>Ao confirmar, o produto será excluído</Typography>,
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

      deleteProduct(id);
    } catch (e) {
      console.log("Erro", e);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Product", minWidth: 150, flex: 1 },
    { field: "quant", headerName: "Quantidade", minWidth: 150, flex: 1 },
    { field: "date", headerName: "CreatedAt", type: "date", width: 600 },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      disableExport: true,
      width: 80,
      renderCell: ({ row }) => <UpdateProduct row={row} />,
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
          aria-label="delete"
          color="error"
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      ),
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
          rows={produtos}
          columns={columns}
          loading={isLoading}
          autoHeight
          disableColumnMenu
          pagination
          rowCount={produtosTotal}
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
