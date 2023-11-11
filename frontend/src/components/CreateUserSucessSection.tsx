import { Box, Button, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

type Props = {
  goToLoginSection: () => void;
};

export function CreateUserSucessSection({ goToLoginSection }: Props) {
  return (
    <Box
      sx={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: 1,
      }}
    >
      <CheckCircleOutlinedIcon
        sx={{ height: 80, width: 80, color: "success.main" }}
      />
      <Typography sx={{ fontSize: 24, fontWeight: 700, color: "success.main" }}>
        Usuário criado com sucesso
      </Typography>
      <Typography sx={{ fontSize: 16 }}>
        Clique no botão abaixo para voltar a tela de login e acessar sua conta
      </Typography>
      <Button
        sx={{ mt: 2 }}
        variant="outlined"
        color="primary"
        size="large"
        fullWidth
        onClick={goToLoginSection}
      >
        Voltar ao login
      </Button>
    </Box>
  );
}
