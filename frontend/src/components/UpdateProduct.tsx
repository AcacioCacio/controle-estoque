import { useState } from 'react';
import { 
    Button, 
    Dialog, 
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    IconButton,
    Typography
} from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import { useConfirm } from "material-ui-confirm";
import { SnackbarProvider, useSnackbar } from 'notistack';

function UpdateProduct(): JSX.Element{
    const [ open, setOpen ] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () =>{
        setOpen(false);
    };

    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const confirm = useConfirm();

    const handleUpdate = async () => {
        try {
          await confirm({
            title: "Deseja alterar mesmo?",
            content: (
              <Typography>Ao confirmar, o produto será excluído</Typography>
            ),
            confirmationText: "Alterar",
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

          enqueueSnackbar('The product has been updated!', {variant: 'success'})

        } catch (e) {
          console.log("Erro", e);
        }
      };

    return(
        <>
            <IconButton
            onClick={handleClickOpen}
            aria-label="edit"
            color="primary"
            size="small"
            >
                <EditIcon/>
            </IconButton>
            
            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='new-screen-overlay-title'
                    aria-describedby='new-screen-overlay-description'
                >
                    <DialogTitle id="new-screen-overlay-title">
                        Alterar Produto
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
                        <TextField 
                            label="Data de Alteração"
                            variant="outlined"
                            sx={{width: "100%", mb: 2}}
                        />          
                    </DialogContent>
                    <DialogActions sx={{marginBottom: "15px", marginRight: "18px"}}>
                        <Button variant="contained" color="primary" onClick={handleUpdate}>
                            Confirmar
                        </Button>
                        <Button variant="contained" color='error' onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
        </>
    );
}

export default UpdateProduct;