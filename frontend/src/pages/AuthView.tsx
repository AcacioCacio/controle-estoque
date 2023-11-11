import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  FIELD_MAX_LENGTH,
  FIELD_MIN_LENGTH,
  REQUIRED_FIELD,
  VALID_EMAIL,
} from "../data/inputErrorTexts";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserFormData } from "../types/UserFormData";
import { useState } from "react";
import useCreateUser from "../hooks/useCreateUser";
import LinearProgress from "@mui/material/LinearProgress";
import * as Yup from "yup";

function getDefaultValues() {
  return { name: "", email: "", password: "" };
}

function getFormValidationSchema(): Yup.AnyObjectSchema {
  return Yup.object({
    name: Yup.string().required(REQUIRED_FIELD),
    email: Yup.string().email(VALID_EMAIL).required(REQUIRED_FIELD),
    password: Yup.string()
      .required(REQUIRED_FIELD)
      .min(6, FIELD_MIN_LENGTH)
      .max(20, FIELD_MAX_LENGTH),
  });
}

export function AuthView(): JSX.Element {
  const navigate = useNavigate();
  const createUser = useCreateUser();

  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = getDefaultValues();
  const validationSchema = getFormValidationSchema();

  const methods = useForm<any>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onCreateAccount = (formData: UserFormData) => {
    createUser(formData, setIsLoading);
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
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "background.paper",
          gap: 4,
        }}
      >
        <Box sx={{ width: "100%" }}>{isLoading && <LinearProgress />}</Box>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            gap: 2,
            px: 2,
          }}
          component="form"
          onSubmit={methods.handleSubmit(onCreateAccount)}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{ fontSize: 32, fontWeight: 500, textAlign: "center" }}
          >
            Criar uma conta
          </Typography>
          <Controller
            name="name"
            control={methods.control}
            render={({ field, fieldState }) => (
              <TextField
                label="Nome"
                variant="outlined"
                sx={{ width: "100%" }}
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error && fieldState.error.message}
                disabled={isLoading}
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
                sx={{ width: "100%" }}
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error && fieldState.error.message}
                disabled={isLoading}
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
                sx={{ width: "100%" }}
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error && fieldState.error.message}
                disabled={isLoading}
              />
            )}
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            disabled={isLoading}
          >
            Cadastrar
          </Button>
          <Typography sx={{ textAlign: "center", mt: 1 }}>
            Já tem uma conta? <Link onClick={navigateToHome}>Faça login</Link>
          </Typography>
        </Stack>

        <Box />
      </Box>
      <Box sx={{ flexGrow: 1, backgroundColor: "primary.main" }} />
    </>
  );
}
