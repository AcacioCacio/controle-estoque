import { Button, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  FIELD_MAX_LENGTH,
  FIELD_MIN_LENGTH,
  REQUIRED_FIELD,
  VALID_EMAIL,
} from "../data/inputErrorTexts";
import { useNavigate } from "react-router-dom";
import { AuthFormData } from "../types/AuthFormData";
import useDoLogin from "../hooks/useDoLogin";

function getDefaultValues() {
  return { email: "", password: "" };
}

function getFormValidationSchema(): Yup.AnyObjectSchema {
  return Yup.object({
    email: Yup.string().email(VALID_EMAIL).required(REQUIRED_FIELD),
    password: Yup.string()
      .required(REQUIRED_FIELD)
      .min(6, FIELD_MIN_LENGTH)
      .max(20, FIELD_MAX_LENGTH),
  });
}

type Props = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  goToCreateSection: () => void;
};

export function LoginFormSection({
  isLoading,
  setIsLoading,
  goToCreateSection,
}: Props) {
  const doLogin = useDoLogin();
  const navigate = useNavigate(); // TODO -> temporário até a implementação do login

  const defaultValues = getDefaultValues();
  const validationSchema = getFormValidationSchema();

  const methods = useForm<any>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onLogin = (formData: AuthFormData) => {
    doLogin(formData, setIsLoading);
  };

  // TODO -> temporário até a implementação do login
  const navigateToHome = () => {
    navigate("/home", { replace: true });
  };

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        gap: 2,
        px: 2,
      }}
      component="form"
      onSubmit={methods.handleSubmit(onLogin)}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ fontSize: 32, fontWeight: 500, textAlign: "center" }}>
        Login
      </Typography>
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
        Login
      </Button>

      {/*TODO -> temporário até a implementação do login*/}
      <Button
        variant="contained"
        size="large"
        color="success"
        disabled={isLoading}
        onClick={navigateToHome}
      >
        Entrar na aplicação (paleativo)
      </Button>

      <Button
        variant="outlined"
        size="large"
        color="primary"
        onClick={goToCreateSection}
      >
        Voltar
      </Button>
    </Stack>
  );
}
