import React from "react";
import { useEffect, useState } from "react";

const DatosPersonales = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1>¡Bienvenido a Fuddplan!</h1>
      <p>Ingresa tus datos para poder obtener un perfil de salud y te ayudaremos a mejorar tu alimentación en base a tu objetivo principal.</p>
      <form action="submit">
        {/* aca se ingresa el nombre*/}
        <label htmlFor="nombre">
          Nombre
          <input type="text" placeholder="Ingresar nombre" name="firstName" id="firstName" value={nombre} onChange={(e = setNombre(e.target.value))} />
        </label>
        {/* aca se ingresa los apellidos*/}
        <label htmlFor="nombre">
          Apellidos
          <input type="text" placeholder="Ingresar apellidos" name="lastNames" id="lastNames" value={apellidos} onChange={(e = setApellidos(e.target.value))} />
        </label>
        {/* aca se ingresa su email*/}
        <label htmlFor="nombre">
          Email
          <input type="email" placeholder="Ingresar email" name="firstName" id="firstName" value={email} onChange={(e = setEmail(e.target.value))} />
        </label>
      </form>
    </>
  );
};

export default DatosPersonales;
