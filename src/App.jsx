import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Enviado from "./components/Enviado";
import Vesh from "./pages/Vesh";
import Tmdb from "./pages/Tmdb";
import Inmo from "./pages/Inmo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos" element={<Project />} />
        <Route path="/acerca_de_mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/exito" element={<Enviado />} />
        <Route path="/protecto_E-commerce" element={<Vesh />} />
        <Route path="/the_movie_data_base" element={<Tmdb />} />
        <Route path="/inmobiliaria_website" element={<Inmo />} />
      </Routes>
    </>
  );
};

export default App;
