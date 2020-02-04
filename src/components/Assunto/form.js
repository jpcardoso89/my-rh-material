import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import {
  TextField,
  Grid,
  Typography,
  Divider,
  Box,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import removerAcentos from "../../util/removeAcentos";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function AssuntoForm({ onUpdateAssuntos, onUpdateMensagem }) {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = data => {
    data.id = getRandomInt(1, 1000);
    data.assunto = removerAcentos(data.assunto);
    const meusAssuntos = JSON.parse(localStorage.getItem("assuntos"));
    if (meusAssuntos) {
      onUpdateAssuntos([...meusAssuntos, data]);
    } else {
      onUpdateAssuntos([data]);
    }
    reset();
    onUpdateMensagem({
      msg: "Assunto salvo com sucesso!",
      severity: "success"
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3">Cadastrar Artigo</Typography>
      <Divider />
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={12} xs={12}>
            <TextField
              name="assunto"
              error={!!errors.assunto}
              inputRef={register({ required: true, min: 10 })}
              fullWidth
              id="assunto"
              label="Artigo"
              placeholder="Detalhe o Artigo"
              variant="outlined"
              helperText={errors.assunto && "Campo obrigatório!"}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item sm={12} md={12} xs={12}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  name="ativo"
                  inputRef={register}
                  control={<Checkbox defaultChecked color="primary" />}
                  label="Ativo?"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>

          <Grid item>
            <Button
              onClick={reset}
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<ClearOutlinedIcon fontSize="large" />}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
