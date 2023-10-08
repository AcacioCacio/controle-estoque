import { Box, Button, Link, TextField, Typography } from "@mui/material";

export function AuthView(): JSX.Element {
  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh", m: 0 }}>
      <Box
        sx={{
          width: { xs: 400, lg: 600 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.default",
          gap: 4,
          px: 4,
        }}
      >
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
          Criar uma conta
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <TextField
            label="Nome"
            variant="outlined"
            sx={{ width: "100%", mb: 2 }}
          />
          <TextField
            label="E-mail"
            type="email"
            variant="outlined"
            sx={{ width: "100%", mb: 2 }}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            sx={{ width: "100%", mb: 2 }}
          />
          <Button variant="contained" size="large" color="primary">
            Cadastrar
          </Button>
        </Box>
        <Typography>
          Já tem uma conta? <Link>Faça login</Link>
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, backgroundColor: "secondary.main" }} />
    </Box>
  );
}
