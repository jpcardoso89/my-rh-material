import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5)
  }
}));

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

export default function Mensagem({ msg, severity, open, onClose }) {
  const classes = useStyles();

  return (
    <Snackbar
      className={classes.root}
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={onClose}
      TransitionComponent={SlideTransition}
    >
      <Alert elevation={6} variant="filled" severity={severity}>
        {msg}
      </Alert>
    </Snackbar>
  );
}
