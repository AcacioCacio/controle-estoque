import { Box, Button, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";
import LogoNavbar from '../Images/Logo.svg';

export function Navbar(): JSX.Element {
  const confirm = useConfirm();
  const navigate = useNavigate();

  const goToEstoque = () => {
    navigate("/home/estoque", { replace: true });
  };

  const goToMovimentacao = () => {
    navigate("/home/movimentacao", { replace: true });
  };

  const handleLogout = async () => {
    try {
      await confirm({
        title: "Deseja sair?",
        content: (
          <Typography>Ao confirmar, você será deslogado da aplicação</Typography>
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
      console.log("Erro", e);
    }
  };

  return (
    <Box
      sx={{
        height: "80px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#E0FFFF",
        px: 10,
        span: 1,
      }}
    >
      <IconButton size="large" edge="start" color="inherit" aria-label="LogoNavBar">
        <img src={LogoNavbar} alt="Logo" style={{ width: '40px', height: '40px' }} />
      </IconButton>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginRight: "10px", marginLeft: "30px", width: '100px', height: '40px', marginTop: "2px" }}
        onClick={goToEstoque}
      >
        Estoque
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginRight: "10px", marginLeft: "20px", width: '150px', height: '40px', marginTop: "2px" }}
        onClick={goToMovimentacao}
      >
        Movimentação
      </Button>
      <Button
        variant="contained"
        color="error"
        sx={{ marginLeft: "83%", width: '80px', height: '40px', marginTop: "2px" }}
        onClick={handleLogout}
      >
        Sair
      </Button>
    </Box>
  );
}