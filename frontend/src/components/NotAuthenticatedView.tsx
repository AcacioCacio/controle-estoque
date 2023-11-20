import { Box, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function NotAuthenticatedView() {
  const navigate = useNavigate();

  const navigateToAuth = () => {
    navigate("/auth", { replace: true });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        px: 4,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          p: 4,
          gap: 2,
        }}
      >
        <Typography sx={{ wordBreak: "break", fontSize: 24, fontWeight: 500 }}>
          Usuário não está logado para acessar essa página
        </Typography>
        <Typography sx={{ wordBreak: "break", fontSize: 18 }}>
          Por favor, volte para a página inicial e faça seu login.
        </Typography>
        <Button
          sx={{ mt: 1 }}
          fullWidth
          variant="outlined"
          size="large"
          color="primary"
          onClick={navigateToAuth}
        >
          Retornar para o login
        </Button>
      </Card>
    </Box>
  );
}
