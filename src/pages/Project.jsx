import React from "react";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";
import Work from "../components/Work";


const Project = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="MIS PROYECTOS." text="A continuación, les dejo algunos de los proyectos en los que he trabajado como desarrolladora web:" />
      <Work/>
      <Footer />
    </>
  );
};

export default Project;
