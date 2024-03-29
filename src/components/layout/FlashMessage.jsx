import React, { useState, useEffect } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FlashMessage = ({message}) => {
    
    const [open, setOpen] = useState(true);
      const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpen(false);
      };
    
    return (
        <>
        <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
        </>
    )
}

export default FlashMessage