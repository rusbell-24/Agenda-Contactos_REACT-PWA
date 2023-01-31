import React from "react";

const TableContacts = ({ contactos, dispatch }) => {
  const shortId = (id) => {
    const newId = id.split("-");
    return newId[0];
  };

  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };

    dispatch(actionDelete);
  };

  return (
    <table className="table table-info table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Numero</th>
          <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((contacto) => {
          return (
            <tr className="table-light" key={contacto.id}>
              <th>{shortId(contacto.id)}</th>
              <td>{contacto.nombre}</td>
              <td>{contacto.numero}</td>
              <td>
                <button
                  onClick={() => handleDelete(contacto.id)}
                  className="btn btn-danger"
                >
                  {" "}
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableContacts;
