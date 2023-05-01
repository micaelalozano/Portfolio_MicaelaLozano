import React from "react";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TMDBbyLozano from "../assets/TMDBbyLozano.mp4";
//Estilos
import "../estilos/vesh.css";

const Tmdb = () => {
  return (
    <>
      <Navbar />
      <HeroImg2
        heading="TMDB by Lozano"
        text="Tecnologías utilizadas: ReactJS - NodeJS - MySQL - CORS - CSS - BaseUI - MaterialUI"
      />
      <div className="nav-p">
        <p className="deploy">DEPLOY:</p>
        <p className="link-a">
          <a href="https://tmdb-by-micaelalozano.vercel.app/" target="_blank" rel="noopener noreferrer">
            https://tmdb-by-micaelalozano.vercel.app/
          </a>
        </p>
      </div>
      <div className="contenedor-video">
        <video className="video" src={TMDBbyLozano} controls></video>
      </div>
      <Footer />
    </>
  );
};

export default Tmdb;
