import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/heroImg.css";
import Imagen from "../assets/fondo.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Imagen} alt="Imagen de computadora" />
      </div>
      <div className="content">
        <p>HOLA! MI NOMBRE ES MICAELA LOZANO</p>
        <h1>Full Stack Developer</h1>
        <div>
          <Link to="/proyectos" className="btn">
            PROYECTOS
          </Link>
          <Link to="/contacto" className="btn btn-light">
            CONTACTO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
