import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="ACERCA DE MI." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
