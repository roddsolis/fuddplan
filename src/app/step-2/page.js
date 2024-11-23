"use client";
import React from "react";
import useUserStore from "../useUserStore";
import styles from "/src/css/DatosDeSalud.module.css";

const DatosDeSalud = () => {
  const nombre = useUserStore((state) => state.nombre);
  return (
    <>
      <h1>{nombre}cual es tu nivel de actividad física</h1>
      <h3>elige una opción</h3>
      <div className={styles.optionContainer}>
        <div className="cardOption">
          <input type="radio" />
          <h6>Sedentario</h6>
        </div>
        <div className="cardOption">
          <input type="radio" />
          <h6>Activo</h6>
        </div>
        <div className="cardOption">
          <input type="radio" />
          <h6>Muy activo</h6>
        </div>
      </div>
    </>
  );
};

export default DatosDeSalud;
