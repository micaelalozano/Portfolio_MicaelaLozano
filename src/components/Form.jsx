import React from "react";
//Estilos
import "../estilos/form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Tu Nombre</label>
        <input type="text" />
        <label>E-Mail</label>
        <input type="email" />
        <label>Asunto</label>
        <input type="text" />
        <label>Mensaje</label>
        <textarea rows="6" placeholder="Escriba su mensaje aqui" />
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
