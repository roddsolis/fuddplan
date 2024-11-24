"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "../useUserStore";
import styles from "@/css/datosPersonales.module.css";

const DatosPersonales = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("");

  const router = useRouter();
  const setNombreGlobal = useUserStore((state) => state.setNombre);

  const irAlSiguientePaso = () => {
    router.push("/step-2");
  };

  const handleOptionChange = (e) => {
    setSexo(e.target.value);
  };

  const enviarDatos = async (e) => {
    e.preventDefault();
    const datos = { nombre, apellidos, email, edad, sexo };

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
        setNombreGlobal(nombre);
        irAlSiguientePaso();
      } else {
        console.log("Error al enviar datos");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h1>¡Bienvenido a Fuddplan!</h1>
        <p>Ingresa tus datos para poder obtener un perfil de salud y te ayudaremos a mejorar tu alimentación en base a tu objetivo principal.</p>
      </div>
      <form onSubmit={enviarDatos} className={styles.formContainer}>
        <label htmlFor="nombre" className={styles.textFieldContainer}>
          Nombre
          <input type="text" placeholder="Ingresar nombre" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <label htmlFor="apellidos" className={styles.textFieldContainer}>
          Apellidos
          <input type="text" placeholder="Ingresar apellidos" name="apellidos" id="apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
        </label>
        <label htmlFor="email" className={styles.textFieldContainer}>
          Email
          <input type="email" placeholder="Ingresar email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="edad" className={styles.textFieldContainer}>
          Edad
          <input type="number" placeholder="Ingresar tu edad" name="edad" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </label>
        <label htmlFor="mujer" className={styles.textFieldContainer}>
          Mujer
          <input type="radio" name="sexo" id="mujer" value="mujer" onChange={handleOptionChange} checked={sexo === "mujer"} />
        </label>
        <label htmlFor="hombre" className={styles.textFieldContainer}>
          Hombre
          <input type="radio" name="sexo" id="hombre" value="hombre" onChange={handleOptionChange} checked={sexo === "hombre"} />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default DatosPersonales;
