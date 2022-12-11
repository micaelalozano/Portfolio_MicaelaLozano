import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/aboutContent.css";
import Imagen from "../assets/fondo.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>TECNOLOGÍAS:</h1>
        <p>full sta jvbhdfhvf dvdfhv dhv dhv dvkfjbngb.</p>
        <Link to="/contacto">
          <button className="btn">CONTACTO</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack-top">
            <img src={Imagen} className="img" alt="imagen" />
          </div>
          <div className="img-stack-bottom">
            <img src={Imagen} className="img" alt="imagen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
