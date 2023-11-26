import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { REQUIRED_FIELD } from "../data/inputErrorTexts";
import useUpdateProduct from "../hooks/useUpdateProduct";
import { ProductFormData } from "../types/ProductFormData";
import { Estoque } from "../types/Estoque";

function getDefaultValues(produto: Estoque) {
  return { name: produto.name, quant: produto.quant };
}

function getFormValidationSchema(): Yup.AnyObjectSchema {
  return Yup.object({
    name: Yup.string().required(REQUIRED_FIELD),
    quant: Yup.string().required(REQUIRED_FIELD),
  });
}

type Props = {
  row: Estoque;
};

function UpdateProduct({ row }: Props): JSX.Element {
  const [open, setOpen] = useState(false);
  const updateProduct = useUpdateProduct();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultValues = getDefaultValues(row);
  const validationSchema = getFormValidationSchema();

  const methods = useForm<any>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onUpdateProduct = (formData: ProductFormData) => {
    updateProduct(row.id, formData);
  };

  return (
    <>
      <IconButton
        onClick={handleClickOpen}
        aria-label="edit"
        color="primary"
        size="small"
      >
        <EditIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="new-screen-overlay-title"
        aria-describedby="new-screen-overlay-description"
      >
        <DialogTitle id="new-screen-overlay-title">Alterar Produto</DialogTitle>
        <Stack
          component="form"
          onSubmit={methods.handleSubmit(onUpdateProduct)}
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
                  sx={{ width: "100%" }}
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

export default UpdateProduct;
