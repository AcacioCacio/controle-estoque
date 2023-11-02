import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function getDefaultValues() {
  return { name: "", email: "", password: "" };
}

function getFormValidationSchema(): Yup.AnyObjectSchema {
  return Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().required("E-mail é obrigatório"),
    password: Yup.string().required("Senha é obrigatória"),
  });
}

export function AuthView(): JSX.Element {
  const navigate = useNavigate();

  const defaultValues = getDefaultValues();
  const validationSchema = getFormValidationSchema();

  const methods = useForm<any>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onCreateAccount = (formData: any) => {
    console.log("create", formData);
  };

  const navigateToHome = () => {
    navigate("/home", { replace: true });
  };

  return (
    <>
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
        <Stack
          sx={{ display: "flex", flexDirection: "column", width: "100%" }}
          component="form"
          onSubmit={methods.handleSubmit(onCreateAccount)}
          noValidate
          autoComplete="off"
        >
          <Controller
            name="name"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                label="Nome"
                variant="outlined"
                sx={{ width: "100%", mb: 2 }}
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error && fieldState.error.message}
              />
            )}
          />
          <Controller
            name="email"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                label="E-mail"
                type="email"
                variant="outlined"
                sx={{ width: "100%", mb: 2 }}
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error && fieldState.error.message}
              />
            )}
          />
          <Controller
            name="password"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                label="Senha"
                type="password"
                variant="outlined"
                sx={{ width: "100%", mb: 2 }}
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error && fieldState.error.message}
              />
            )}
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Cadastrar
          </Button>
        </Stack>
        <Typography>
          Já tem uma conta? <Link onClick={navigateToHome}>Faça login</Link>
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, backgroundColor: "secondary.main" }} />
    </>
  );
}
