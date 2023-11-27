import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { REQUIRED_FIELD } from "../data/inputErrorTexts";
import useCreateProduct from "../hooks/useCreateProduct";
import { ProductFormData } from "../types/ProductFormData";

function getDefaultValues() {
  return { name: "", quant: "0" };
}

function getFormValidationSchema(): Yup.AnyObjectSchema {
  return Yup.object({
    name: Yup.string().required(REQUIRED_FIELD),
    quant: Yup.string().required(REQUIRED_FIELD),
  });
}

function NewProduct() {
  const [open, setOpen] = useState(false);
  const createProduct = useCreateProduct();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultValues = getDefaultValues();
  const validationSchema = getFormValidationSchema();

  const methods = useForm<any>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onCreateProduct = (formData: ProductFormData) => {
    createProduct(formData, handleClose);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Novo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="new-screen-overlay-title"
        aria-describedby="new-screen-overlay-description"
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            gap: 2,
            px: 2,
          }}
          component="form"
          onSubmit={methods.handleSubmit(onCreateProduct)}
          noValidate
          autoComplete="off"
        >
          <DialogTitle id="new-screen-overlay-title">Novo Produto</DialogTitle>
          <DialogContent>
            <Controller
              name="name"
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextField
                  label="Nome do Produto"
                  variant="outlined"
                  sx={{ width: "100%", paddingBottom: "15px" }}
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error && fieldState.error.message}
                />
              )}
            />
            <Controller
              name="quant"
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextField
                  label="Quantidade"
                  type="number"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error && fieldState.error.message}
                />
              )}
            />
          </DialogContent>
          <DialogActions sx={{ marginBottom: "15px", marginRight: "18px" }}>
            <Button type="submit" variant="contained" color="primary">
              Confirm
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </>
  );
}

export default NewProduct;
