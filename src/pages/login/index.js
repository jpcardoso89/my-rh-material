import React from "react";
import {
  Paper,
  TextField,
  Box,
  Grid,
  makeStyles,
  Button,
  Typography,
  Avatar,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { blue, green } from "@material-ui/core/colors";
import { LockOutlined, Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  box: {
    background:
      "linear-gradient(135deg, rgb(22, 114, 105) 0%, rgb(22, 114, 105) 50%,rgb(89, 171, 135) 50%, rgb(89, 171, 135) 57%,rgb(67, 152, 125) 57%, rgb(67, 152, 125) 74%,rgb(44, 133, 115) 74%, rgb(44, 133, 115) 76%,rgb(134, 209, 155) 76%, rgb(134, 209, 155) 84%,rgb(156, 228, 165) 84%, rgb(156, 228, 165) 91%,rgb(111, 190, 145) 91%, rgb(111, 190, 145) 100%)"
  },
  button: {
    color: blue[50],
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700]
    }
  },
  linkButton: {
    color: blue[500]
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: green[500]
  }
}));

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  const handleClickShowPassword = event => {
    setShowPassword(!showPassword);
  };

  const onSubmit = data => {};
  return (
    <Box
      className={classes.box}
      height="100vh"
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Paper>
        <Box padding={4} maxWidth="400px" minWidth="400px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" spacing={2}>
              <Grid item container justify="center">
                <Avatar className={classes.avatar}>
                  <LockOutlined fontSize="large" />
                </Avatar>
              </Grid>
              <Grid item sm={12}>
                <Box textAlign="center">
                  <Typography component="h1" variant="h5">
                    Login
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12}>
                <TextField
                  name="email"
                  error={!!errors.email}
                  inputRef={register({ required: true })}
                  id="email"
                  fullWidth
                  label="Email *"
                  variant="outlined"
                  helperText={errors.email && "Campo obrigatório!"}
                />
              </Grid>

              <Grid item xl={12} sm={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="senha">Senha *</InputLabel>
                  <OutlinedInput
                    inputRef={register({ required: true })}
                    id="senha"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={12} md={12}>
                <Button
                  className={classes.button}
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Entrar
                </Button>
              </Grid>
              <Grid item sm={12}>
                <Button
                  className={classes.linkButton}
                  component={RouterLink}
                  to="/assunto"
                >
                  Esqueceu a senha?
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}
