import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";
import LogoNavbar from "../Images/Logo.svg";
import useDoLogout from "../hooks/useDoLogout";

export function Navbar(): JSX.Element {
  const doLogout = useDoLogout();

  const confirm = useConfirm();
  const navigate = useNavigate();

  const goToEstoque = () => {
    navigate("/home/estoque", { replace: true });
  };

  const goToMovimentacao = () => {
    navigate("/home/movimentacao", { replace: true });
  };

  const goToUsuarios = () => {
    navigate("/home/usuarios", { replace: true });
  };

  const handleLogout = async () => {
    try {
      await confirm({
        title: "Deseja sair?",
        content: (
          <Typography>
            Ao confirmar, você será deslogado da aplicação
          </Typography>
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

      doLogout();
    } catch (e) {}
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="LogoNavBar"
            onClick={goToEstoque}
          >
            <img
              src={LogoNavbar}
              alt="Logo"
              style={{ width: "40px", height: "40px" }}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sistema de Controle
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Button color="inherit" onClick={goToEstoque}>
                  Estoque
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={goToMovimentacao}>
                  Movimentações
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={goToUsuarios}>
                  Usuarios
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={handleLogout}>
                  Sair
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
