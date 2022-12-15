import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
//Estilos
import "../estilos/form.css";

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/contacto",
        {
          name,
          email,
          asunto,
          mensaje,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => {
        navigate("/exito");
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} action="post">
        <label>Tu Nombre</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>E-Mail</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Asunto</label>
        <input
          type="text"
          onChange={(e) => setAsunto(e.target.value)}
          value={asunto}
        />
        <label>Mensaje</label>
        <textarea
          rows="6"
          placeholder="Escriba su mensaje aqui"
          onChange={(e) => setMensaje(e.target.value)}
          value={mensaje}
        />
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
