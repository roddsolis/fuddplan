"use client";
import React, { useState } from "react";

const DatosPersonales = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [mujer, setMujer] = useState("");
  const [hombre, setHombre] = useState("");

  const enviarDatos = async (e) => {
    e.preventDefault();
    const datos = { nombre, apellidos, email, edad, mujer, hombre };

    try {
      const response = await fetch("http://localhost:5000/user_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Datos enviados:", result);
      } else {
        console.log("Error al enviar datos");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      <h1>¡Bienvenido a Fuddplan!</h1>
      <p>Ingresa tus datos para poder obtener un perfil de salud y te ayudaremos a mejorar tu alimentación en base a tu objetivo principal.</p>
      <form onSubmit={enviarDatos}>
        <label htmlFor="nombre">
          Nombre
          <input type="text" placeholder="Ingresar nombre" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label htmlFor="apellidos">
          Apellidos
          <input type="text" placeholder="Ingresar apellidos" name="apellidos" id="apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" placeholder="Ingresar email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="edad">
          Edad
          <input type="number" placeholder="Ingresar tu edad" name="edad" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <label htmlFor="mujer">
          Mujer
          <input type="radio" name="mujer" id="mujer" value={mujer} onChange={(e) => setMujer(e.target.value)} />
        </label>
        <label htmlFor="hombre">
          Hombre
          <input type="radio" name="hombre" id="hombre" value={hombre} onChange={(e) => setHombre(e.target.value)} />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default DatosPersonales;
