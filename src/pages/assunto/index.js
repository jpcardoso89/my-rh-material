import React, { Component } from "react";
import AssuntoForm from "../../components/Assunto/form";
import AssuntoTable from "../../components/Assunto/table";
import { Paper, Box } from "@material-ui/core";

export default class Assunto extends Component {
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

  handleUpdateState = assuntos => {
    this.setState({ assuntos: assuntos });
  };

  render() {
    return (
      <>
        <Paper>
          <Box padding={5}>
            <AssuntoForm onUpdate={this.handleUpdateState} />
          </Box>
        </Paper>
        <Box marginTop={3}>
          <AssuntoTable assuntos={this.state.assuntos} />
        </Box>
      </>
    );
  }
}
