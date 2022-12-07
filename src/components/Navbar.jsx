import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
//Estilos
import "../estilos/navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/acerca_de_mi">Acerca de</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
      <div className="hamburguer">
        <FaBars size={30} style={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default Navbar;
