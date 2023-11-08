import React, { useState } from 'react';
import { 
    Button, 
    Dialog, 
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from '@mui/material';

function DeleteProduct(){
    const [ open, setOpen ] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () =>{
        setOpen(false);
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
                    Deletar Produto
                </DialogTitle>
                <DialogContent>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Deseja mesmo excluir permanentemente este produto?
                    </Typography>      
                </DialogContent>
                <DialogActions sx={{marginBottom: "15px", marginRight: "18px"}}>
                    <Button variant="contained" color="primary" onClick={handleClose}>
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