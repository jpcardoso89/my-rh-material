import React, { Component } from "react";
import RequerimentoForm from "../../components/Requerimento/form";

class Requerimento extends Component {
  constructor(props) {
    super(props);
    this.assuntos = [];
  }

  loadAssuntos() {
    const assuntos = localStorage.getItem("assuntos");
    if (assuntos) {
      this.assuntos = JSON.parse(assuntos);
    }
  }

  render() {
    this.loadAssuntos();
    return (
      <>
        <RequerimentoForm assuntos={this.assuntos} />
      </>
    );
  }
}

export default Requerimento;
