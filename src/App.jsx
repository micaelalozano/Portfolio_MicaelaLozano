import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/proyectos" element={<Project />} />
        <Route path="/acerca_de_mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
