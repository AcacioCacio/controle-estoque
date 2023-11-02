import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";

// Criar NAVBAR usando a logo => '../Images/Logo.svg'

export function Navbar() {
  const confirm = useConfirm();

  const navigate = useNavigate();

  const goToEstoque = () => {
    navigate("/home/estoque", { replace: true });
  };

  const goToMovimentacao = () => {
    navigate("/home/movimentacao", { replace: true });
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await confirm({
        title: "Deseja sair?",
        content: (
          <Typography>Ao confirmar você será deslogado da aplicação</Typography>
        ),
        confirmationText: "Sair",
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

      navigate("/auth", { replace: true });
    } catch (e) {
      console.log("e", e);
    }
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
