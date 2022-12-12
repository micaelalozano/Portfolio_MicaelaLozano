import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/aboutContent.css";
import Foto from "../assets/curso-react.jpg";
import Fot from "../assets/css.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>TECNOLOGÍAS:</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to="/contacto">
          <button className="btn">CONTACTO</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack-top">
            <img src={Fot} className="img" alt="imagen" />
          </div>
          <div className="img-stack-bottom">
            <img src={Foto} className="img" alt="imagen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
