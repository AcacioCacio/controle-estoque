import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Searchbar } from "./Searchbar";
import useUserList from "../hooks/useUserList";

export function UsuariosTable() {
  const { usuarios, setUsuarios, usuariosTotal, isLoading, listRefresh } =
    useUserList();

  const handleSearch = (search?: string) => {
    if (search) {
      setUsuarios(
        usuarios.filter((usuario) =>
          usuario.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    } else {
      listRefresh();
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nome", minWidth: 150, flex: 1 },
    { field: "email", headerName: "E-mail", minWidth: 150, flex: 1 },
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
          <p>Usuários</p>
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
          placeholder="Procurar por nome"
          onSearch={handleSearch}
          disabled={false}
        />
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DataGrid
          rows={usuarios}
          columns={columns}
          loading={isLoading}
          autoHeight
          disableColumnMenu
          pagination
          rowCount={usuariosTotal}
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
