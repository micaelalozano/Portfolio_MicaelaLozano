import React from "react";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
//Estilos
import "../estilos/workCard.css";

const Enviado = () => {
  return (
    <>
      <Navbar />
      <HeroImg2
        heading="TU MAIL SE HA ENVIADO CON EXITO!"
        text="Gracias por estar en contacto"
      />
      <div className="car-contenedor">
      </div>
      <Footer />
    </>
  );
};

export default Enviado;
