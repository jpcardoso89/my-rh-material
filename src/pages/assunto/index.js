import React, { Component } from "react";
import AssuntoForm from "../../components/Assunto/form";
import AssuntoTable from "../../components/Assunto/table";
import Mensagem from "../../components/Mensagem";
import { Paper, Box } from "@material-ui/core";

export default class Assunto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assuntos: [],
      mensagem: {
        open: false,
        msg: "",
        severity: "success"
      }
    };
  }
  componentDidMount() {
    const assuntos = localStorage.getItem("assuntos");
    if (assuntos) {
      this.setState({ assuntos: JSON.parse(assuntos) });
    }
  }

  handleUpdateAssunto = assuntos => {
    console.log(assuntos);
    localStorage.setItem("assuntos", JSON.stringify(assuntos));
    this.setState({ assuntos: assuntos });
  };

  handleUpdateMensagem = mensagem => {
    this.setState({
      mensagem: {
        open: true,
        msg: mensagem.msg,
        severity: mensagem.severity
      }
    });
  };

  handleCloseMensagem = (event, reason) => {
    this.setState(prevState => ({
      mensagem: {
        open: false
      }
    }));
  };

  render() {
    return (
      <>
        <Mensagem {...this.state.mensagem} onClose={this.handleCloseMensagem} />
        <Paper>
          <Box padding={5}>
            <AssuntoForm
              onUpdateAssuntos={this.handleUpdateAssunto}
              onUpdateMensagem={this.handleUpdateMensagem}
            />
          </Box>
        </Paper>
        <Box marginTop={3}>
          <AssuntoTable
            assuntos={this.state.assuntos}
            onUpdateAssuntos={this.handleUpdateAssunto}
            onUpdateMensagem={this.handleUpdateMensagem}
          />
        </Box>
      </>
    );
  }
}
