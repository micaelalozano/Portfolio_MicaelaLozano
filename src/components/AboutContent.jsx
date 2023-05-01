import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/aboutContent.css";
import Foto from "../assets/curso-react.jpg";
import Fot from "../assets/full.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>TECNOLOGÍAS:</h1>
        <p> | React | ReactJS | NodeJS | Express | PostgreSQL | Sequelize | JWT  | NodeMailer | HTML | CSS | JavaScript | Material UI | Bootstrap | GitHub | Trello |</p>
        <Link to="/contacto">
          <button className="btn">VER CV</button>
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
