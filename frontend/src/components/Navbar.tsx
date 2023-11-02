import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Criar NAVBAR usando a logo => '../Images/Logo.svg'

export function Navbar() {
  const navigate = useNavigate();

  const goToEstoque = () => {
    navigate("/home/estoque", { replace: true });
  };

  const goToMovimentacao = () => {
    navigate("/home/movimentacao", { replace: true });
  };

  const handleLogout = () => {
    navigate("/auth", { replace: true });
  };

  return (
    <Box
      sx={{
        height: "84px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
        px: 10,
        span: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button sx={{ marginRight: "35px" }}>
          <Typography>NAVBAR Logo aqui!!!</Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: "35px" }}
          onClick={goToEstoque}
        >
          Estoque
        </Button>
        <Button variant="contained" onClick={goToMovimentacao}>
          Movimentação
        </Button>
      </Box>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Sair
      </Button>
    </Box>
  );
}
