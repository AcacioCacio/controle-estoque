import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserFormData } from "../types/UserFormData";
import useCreateUser from "../hooks/useCreateUser";
import * as Yup from "yup";
import {
  FIELD_MAX_LENGTH,
  FIELD_MIN_LENGTH,
  REQUIRED_FIELD,
  VALID_EMAIL,
} from "../data/inputErrorTexts";

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

type Props = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  goToLoginSection: () => void;
};

export function AuthFormSection({
  isLoading,
  setIsLoading,
  goToLoginSection,
}: Props) {
  const createUser = useCreateUser();

  const defaultValues = getDefaultValues();
  const validationSchema = getFormValidationSchema();

  const methods = useForm<any>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onCreateAccount = (formData: UserFormData) => {
    createUser(formData, setIsLoading);
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
      onSubmit={methods.handleSubmit(onCreateAccount)}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ fontSize: 32, fontWeight: 500, textAlign: "center" }}>
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
        Já tem uma conta?{" "}
        <Link sx={{ cursor: "pointer" }} onClick={goToLoginSection}>
          Faça login
        </Link>
      </Typography>
    </Stack>
  );
}
