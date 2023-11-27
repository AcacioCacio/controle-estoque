import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Searchbar } from "./Searchbar";
import useMovementsList from "../hooks/useMovementsList";
import MovimentacaoModal from "./MovimentacaoModal";

const meuTexto = "Movimentação";

export function MovimentacaoTable() {
  const {
    movimentacoes,
    setMovimentacoes,
    movimentacoesTotal,
    isLoading,
    listRefresh,
  } = useMovementsList();

  const handleSearch = (search?: string) => {
    if (search) {
      setMovimentacoes(
        movimentacoes.filter((movimentacao) =>
          movimentacao.nameProduct.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    } else {
      listRefresh();
    }
  };

  const columns: GridColDef[] = [
    { field: "nameProduct", headerName: "Produto", minWidth: 150, flex: 1 },
    {
      field: "quant",
      headerName: "Quantidade movimentada",
      minWidth: 150,
      flex: 1,
    },
    { field: "type", headerName: "Tipo de transação", width: 600 },
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
        <MovimentacaoModal />
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DataGrid
          rows={movimentacoes}
          columns={columns}
          loading={isLoading}
          autoHeight
          disableColumnMenu
          pagination
          rowCount={movimentacoesTotal}
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
