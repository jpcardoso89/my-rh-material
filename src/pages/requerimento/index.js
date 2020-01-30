import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import RequerimentoForm from "../../components/requerimento-form";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Requerimento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assuntos: []
    };
  }

  componentDidMount() {
    const assuntos = localStorage.getItem("assuntos");
    if (assuntos) {
      this.setState({ assuntos: JSON.parse(assuntos) });
    }
  }

  render() {
    return (
      <>
        <RequerimentoForm assuntos={this.state.assuntos} />
      </>
    );
  }
}

export default withStyles(styles)(Requerimento);
