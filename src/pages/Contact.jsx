import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImg2 heading="CONTACTO." text="Estemos en contacto para mas información" />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
