import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormContact = ({ dispatch }) => {
  const [data, setData] = useState({ nombre: "", numero: "" });

  const { nombre, numero } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuidv4(),
      nombre: nombre,
      numero: numero,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <div className="container">
      <label className="form-label">
        Nombre:{" "}
        <input
          onChange={handleChange}
          name="nombre"
          value={nombre}
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese nombre de contacto"
          autoComplete="off"
        />
      </label>
      <label className="form-label">
        Número:{" "}
        <input
          onChange={handleChange}
          name="numero"
          value={numero}
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese numero de contacto"
          autoComplete="off"
        />
      </label>

      <button onClick={handleAdd} className="btn btn-success">
        Agregar
      </button>
    </div>
  );
};

export default FormContact;
