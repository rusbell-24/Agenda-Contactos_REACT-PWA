import React, { useEffect, useReducer, useState } from "react";
import FormContact from "./FormContact";
import "../stylesheets/Contacts.css";
import { ContactsReducer } from "../reducers/ContactsReducer";
import TableContacts from "./TableContacts";

const init = () => {
  const data = localStorage.getItem("Contactos");
  return data ? JSON.parse(data) : [];
};

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, [], init);

  const [formView, setFormView] = useState(false);

  useEffect(() => {
    localStorage.setItem("Contactos", JSON.stringify(state));
  }, [state]);

  return (
    <div className="cantainer d-flex">
      <div className="w-25">
        <button
          onClick={() => {
            setFormView(!formView);
          }}
          className="btn btn-success m-2"
        >
          {" "}
          {formView ? "- Cerrar Formulario" : "+ Agregar Contacto"}
        </button>
        {formView && (
          <div className="container-form p-3">
            <FormContact dispatch={dispatch} />
          </div>
        )}
      </div>
      <div className="container-table w-100 p-2 mx-4">
        <TableContacts contactos={state} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Contacts;
