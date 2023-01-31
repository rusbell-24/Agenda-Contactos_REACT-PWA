import React from "react";
import "../stylesheets/Header.css";

const Header = () => {
  return (
    <nav className="navbar header" data-bs-theme="dark">
      <div className="container-fluid">
        <h1 className="navbar-brand">
          Agenda de Contactos Rusbell __ React - PWA
        </h1>
      </div>
    </nav>
  );
};
export default Header;
