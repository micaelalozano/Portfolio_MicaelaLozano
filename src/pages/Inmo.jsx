import React from "react";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import INMObyLozano from "../assets/INMObyLozano.mp4";
//Estilos
import "../estilos/vesh.css";

const Inmo = () => {
  return (
    <>
      <Navbar />
      <HeroImg2
        heading="INMOBILIARIA by Lozano"
        text="Tecnologías utilizadas: ReactJS - NodeJS - MySQL - NodeMailer - CORS - CSS"
      />
      <div className="contenedor-video">
        <video className="video" src={INMObyLozano} controls></video>
      </div>
      <Footer />
    </>
  );
};

export default Inmo;


/*{

<div className="nav-p">
        <p className="deploy">DEPLOY:</p>
        <p className="link-a">
          <a
            href="https://inmobiliaria-by-lozano.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://inmobiliaria-by-lozano.vercel.app/
          </a>
        </p>
      </div>

}*/