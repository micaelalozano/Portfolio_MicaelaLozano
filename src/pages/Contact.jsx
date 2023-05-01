import React from "react";
import Footer from "../components/Footer";
//import Form from "../components/Form";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import MiCV from "../assets/MiCurriculum.pdf";
//Estilos
import "../estilos/vesh.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImg2
        heading="CURRICULUM VITAE."
        text="Desarrolladora web con experiencia en diseño y desarrollo de sitios web personalizados y aplicaciones móviles."
      />
      <div className="cv-contenedor">
        <embed src={MiCV} width="600" height="850" type="application/pdf" />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
