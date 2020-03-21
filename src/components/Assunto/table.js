import React from "react";
import MaterialTable from "material-table";
import Capitalize from "../../util/capitalize";
import Switch from "@material-ui/core/Switch";

export default function AssuntoTable({
  assuntos,
  onUpdateMensagem,
  onUpdateAssuntos
}) {
  const getCollumnsNames = () => {
    return Object.keys(assuntos[0]).map(key => ({
      title: Capitalize(key),
      field: key
    }));
  };

  const handleDelete = (event, rowData) => {
    const assuntoIndex = assuntos.findIndex(
      assunto => assunto.id === rowData.id
    );
    assuntos.splice(assuntoIndex, 1);
    onUpdateAssuntos(assuntos);
    onUpdateMensagem({
      msg: "Assunto deletado com sucesso!",
      severity: "info"
    });
  };

  const handleChange = (event, rowData) => {
    const assuntoIndex = assuntos.findIndex(
      assunto => assunto.id === rowData.id
    );
    let assuntoAtualizado = assuntos.splice(assuntoIndex, 1)[0];
    assuntoAtualizado.ativo = !assuntoAtualizado.ativo;
    onUpdateAssuntos([...assuntos, assuntoAtualizado]);
    onUpdateMensagem({
      msg: `O assunto ${rowData.assunto} foi ${
        assuntoAtualizado.ativo ? "ATIVADO" : "DESATIVADO"
      }!`,
      severity: "warning"
    });
  };

  const table = assuntos[0] ? (
    <MaterialTable
      title="Assuntos"
      columns={getCollumnsNames()}
      data={assuntos.map(assunto => ({
        id: assunto.id,
        assunto: assunto.assunto,
        ativo: assunto.ativo ? "Sim" : "Não"
      }))}
      actions={[
        // {
        //   icon: () => (
        //     <DeleteForeverOutlinedIcon style={{ color: blueGrey[500] }} />
        //   ),
        //   tooltip: "Delete",
        //   onClick: handleDelete
        // },

        rowData => ({
          icon: () => (
            <Switch checked={rowData.ativo === "Sim" ? true : false} />
          ),
          tooltip: "Alterar Status",
          onClick: handleChange
        })
      ]}
      options={{ actionsColumnIndex: 3 }}
    />
  ) : null;

  return <div style={{ width: "100%" }}>{table}</div>;
}
