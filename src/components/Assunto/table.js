import React from "react";
import MaterialTable from "material-table";
import Capitalize from "../../util/capitalize";

export default function AssuntoTable({ assuntos }) {
  const getCollumnsNames = () => {
    delete assuntos[0].id;
    return Object.keys(assuntos[0]).map(key => ({
      title: Capitalize(key),
      field: key
    }));
  };

  const table = assuntos[0] ? (
    <MaterialTable
      title="Assuntos"
      columns={getCollumnsNames()}
      data={assuntos.map(assunto => ({
        assunto: assunto.assunto,
        ativo: assunto.ativo ? "Sim" : "Não"
      }))}
    />
  ) : null;

  return <div style={{ width: "100%" }}>{table}</div>;
}
