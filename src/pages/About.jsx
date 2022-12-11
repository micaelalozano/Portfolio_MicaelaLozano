import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="ACERCA DE MI." text="soy la mejor" />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
