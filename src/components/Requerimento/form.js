import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SaveIcon from "@material-ui/icons/Save";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import Grid from "@material-ui/core/Grid";
import FormHelperText from "@material-ui/core/FormHelperText";
import {
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  Divider,
  Box,
  RadioGroup,
  Button,
  FormLabel,
  makeStyles,
  Paper
} from "@material-ui/core";

// para personalizar o material-UI basta pegar o nome da classe na
//API do component e sobrescrever como abaixo
const useStyles = makeStyles({
  item: {
    marginBottom: "25px"
  },
  radioGroup: {
    border: "1px solid red",
    borderRadius: "4px"
  }
});

const RequerimentoForm = ({ assuntos }) => {
  const { handleSubmit, errors, reset, register, formState } = useForm();
  const [assuntoValue, setAssuntoValue] = useState(0);
  const classes = useStyles();

  const handleChange = event => {
    setAssuntoValue(+event.target.value);
  };

  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  console.log(assuntos);
  return (
    <Paper>
      <Box padding={5}>
        <Typography variant="h3">Requerimento</Typography>
        <Divider />
        <Box mt={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}>
              <Grid classes={{ item: classes.item }} item xs={12}>
                <FormControl error={!!errors.assuntoId}>
                  <FormLabel component="legend">Assunto</FormLabel>
                  <RadioGroup
                    className={errors.assuntoId && classes.radioGroup}
                    aria-label="assunto"
                    value={assuntoValue}
                    onChange={handleChange}
                  >
                    <Grid container spacing={1}>
                      {assuntos.map(assunto => (
                        <Grid key={assunto.id} item xs={3}>
                          <FormControlLabel
                            checked={assunto.id === assuntoValue}
                            value={assunto.id}
                            name="assuntoId"
                            disabled={!assunto.ativo}
                            inputRef={register({ required: true })}
                            control={<Radio />}
                            label={assunto.assunto}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </RadioGroup>
                  {errors.assuntoId && (
                    <FormHelperText id="my-helper-text">
                      Assunto é obrigatório.
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid
                classes={{ item: classes.item }}
                item
                xs={12}
                sm={12}
                md={12}
              >
                <TextField
                  inputRef={register}
                  id="outlined-multiline-static"
                  label="Informações Adicionais"
                  name="informacoesAdicionais"
                  multiline
                  rows="4"
                  fullWidth
                  variant="outlined"
                  placeholder="Detalhe seu pedido"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>

              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SaveIcon />}
                  disabled={formState.isSubmitting}
                >
                  Save
                </Button>
              </Grid>

              <Grid item>
                <Button
                  onClick={() => {
                    reset();
                    setAssuntoValue("");
                  }}
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<ClearOutlinedIcon fontSize="large" />}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Paper>
  );
};
export default RequerimentoForm;
