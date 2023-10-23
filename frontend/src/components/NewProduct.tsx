import React, { useState } from 'react';
import { 
    Button, 
    Dialog, 
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from '@mui/material';

function NewProduct(){
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
                    <TextField 
                        label="Data de Criação"
                        variant="outlined"
                        sx={{width: "100%", mb: 2}}
                    />          
                </DialogContent>
                <DialogActions sx={{marginBottom: "15px", marginRight: "18px"}}>
                    <Button variant="contained" color="primary" onClick={handleClose}>
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