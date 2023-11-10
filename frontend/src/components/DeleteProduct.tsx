import { useState } from 'react';
import { 
    Button, 
    Dialog, 
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    IconButton
} from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from 'notistack';

function DeleteProduct(){
    const [ open, setOpen ] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () =>{
        setOpen(false);
    };

    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const confirm = useConfirm();

    const handleDelete = async () => {
        try {
          await confirm({
            title: "Deseja excluir mesmo?",
            content: (
              <Typography>Ao confirmar, o produto será excluído</Typography>
            ),
            confirmationText: "Excluir",
            confirmationButtonProps: {
              color: "error",
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

          enqueueSnackbar('The product has been deleted!', {variant: 'success'})

        } catch (e) {
          console.log("Erro", e);
          enqueueSnackbar('Error to delete the product!', {variant: 'error'})
        }
      };

    return(
        <>
            <IconButton
            onClick={handleClickOpen}
            aria-label="delete"
            color="error"
            size="small"
            >
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='new-screen-overlay-title'
                aria-describedby='new-screen-overlay-description'
            >
                <DialogTitle id="new-screen-overlay-title">
                    Deletar Produto
                </DialogTitle>
                <DialogContent>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Deseja mesmo excluir permanentemente este produto?
                    </Typography>      
                </DialogContent>
                <DialogActions sx={{marginBottom: "15px", marginRight: "18px"}}>
                    <Button variant="contained" color="primary" onClick={handleDelete}>
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

export default DeleteProduct;