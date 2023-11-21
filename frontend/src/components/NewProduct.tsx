import React, { useState } from 'react';
import {
    Button, 
    Dialog, 
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography
} from '@mui/material';
import { useConfirm } from "material-ui-confirm";
import { SnackbarProvider, useSnackbar } from 'notistack';

function NewProduct(){
    const [ open, setOpen ] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () =>{
        setOpen(false);
    };

    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const confirm = useConfirm();

    const handleNew = async () => {
        try {
          await confirm({
            title: "Deseja criar mesmo?",
            content: (
              <Typography>Ao confirmar, o produto será criado</Typography>
            ),
            confirmationText: "Criar",
            confirmationButtonProps: {
              color: "info",
              variant: "contained",
              sx: {
                mb: 2,
                mr: 2,
              },
            },
            cancellationText: "Cancelar",
            cancellationButtonProps: {
              variant: "outlined",
              sx: {
                mb: 2,
                mr: 1,
              },
            },
          });

          enqueueSnackbar('The product has been created!', {variant: 'success'})

        } catch (e) {
          console.log("Erro", e);
          enqueueSnackbar('Error to create the product!', {variant: 'error'})
        }
      };

    return(
        <>
            <Button 
                variant="contained" 
                color="primary"
                onClick={handleClickOpen}
            >
                Novo
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='new-screen-overlay-title'
                aria-describedby='new-screen-overlay-description'
            >
                <DialogTitle id="new-screen-overlay-title">
                    Novo Produto
                </DialogTitle>
                <DialogContent>
                    <TextField 
                        label="Nome do Produto"
                        variant="outlined"
                        sx={{width: "100%", mb: 2}}
                    />
                    <TextField 
                        label="Quantidade"
                        variant="outlined"
                        sx={{width: "100%", mb: 2}}
                    />         
                </DialogContent>
                <DialogActions sx={{marginBottom: "15px", marginRight: "18px"}}>
                    <Button variant="contained" color="primary" onClick={handleNew}>
                        Confirm
                    </Button>
                    <Button variant="contained" color='error' onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default NewProduct;