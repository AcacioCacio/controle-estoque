import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { REQUIRED_FIELD } from "../data/inputErrorTexts";
import { MovimentacaoFormData } from "../types/MovimentacaoFormData";
import * as Yup from "yup";
import productsApi from "../services/productsApi";
import useCreateMovement from "../hooks/useCreateMovement";

function getDefaultValues() {
  return {
    idProduct: null,
    type: "doacao",
    quant: "0",
  };
}

function getFormValidationSchema(): Yup.AnyObjectSchema {
  return Yup.object({
    idProduct: Yup.string().required(REQUIRED_FIELD),
    type: Yup.string().required(REQUIRED_FIELD),
    quant: Yup.string().required(REQUIRED_FIELD),
  });
}

type SelectOptions = {
  name: string;
  id: string;
};

const transactionOptions: SelectOptions[] = [
  {
    name: "Doação",
    id: "doacao",
  },
  {
    name: "Compra",
    id: "compra",
  },
  {
    name: "Descarte",
    id: "descarte",
  },
  {
    name: "Encaminhamento para outra Instituição",
    id: "encaminhamento para outra instituição",
  },
  {
    name: "Distribuição direto pelo projeto",
    id: "distribuição direto pelo projeto",
  },
];

function MovimentacaoModal() {
  const [open, setOpen] = useState(false);
  const [selectOptions, setSelectOptions] = useState<SelectOptions[]>([]);
  const createMovement = useCreateMovement();

  useEffect(() => {
    productsApi
      .findSelectOptions()
      .then((res: any) => setSelectOptions(res.produtos));
  }, []);

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

  const onCreateProduct = (formData: MovimentacaoFormData) => {
    createMovement(formData, handleClose);
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
          component="form"
          onSubmit={methods.handleSubmit(onCreateProduct)}
          noValidate
          autoComplete="off"
        >
          <DialogTitle id="new-screen-overlay-title">Novo Produto</DialogTitle>
          <DialogContent>
            <Controller
              name="idProduct"
              control={methods.control}
              render={({ field, fieldState }) => (
                <Select
                  label="Produto"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  {...field}
                  error={fieldState.invalid}
                  displayEmpty
                >
                  {selectOptions.map((product) => (
                    <MenuItem key={product.id} value={product.id}>
                      {product.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="type"
              control={methods.control}
              render={({ field, fieldState }) => (
                <Select
                  label="Tipo de transação"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  {...field}
                  error={fieldState.invalid}
                  displayEmpty
                >
                  {transactionOptions.map((type) => (
                    <MenuItem key={type.id} value={type.id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </Select>
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

export default MovimentacaoModal;
