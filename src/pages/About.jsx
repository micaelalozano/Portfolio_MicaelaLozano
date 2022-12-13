import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="ACERCA DE MÍ." text="Hola! Mi nombre es Micaela,soy una Full Stack Developer de 27 años.
          Siempre me apasionó aprender todo lo que pudiera en la vida por eso este año decidí dar un salto en mí carrera y realizar un Coding Bootcamp de +800hs,
          en donde aprendí las tecnologías más demandadas de la industria IT, y a trabajar con metodologías agiles tales como Scrum y Pair Programming." />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
