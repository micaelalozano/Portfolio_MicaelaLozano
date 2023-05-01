import React from "react";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VeshbyLozano from "../assets/VESHbyLozano.mp4";
//Estilos
import "../estilos/vesh.css";

const Vesh = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="VESH by Lozano" text="Tecnologías utilizadas: HTML - CSS - Media queries - JavaScript - React " />
      <div className="nav-p">
        <p className="deploy">DEPLOY:</p>
        <p className="link-a">
          <a href="https://sitiovesh-by-lozano.vercel.app/" target="_blank" rel="noopener noreferrer">
          https://sitiovesh-by-lozano.vercel.app/
          </a>
        </p>
      </div>
      <div className="contenedor-video">
        <video className="video" src={VeshbyLozano} controls></video>
      </div>
      <Footer/>
    </>
  );
};

export default Vesh;
