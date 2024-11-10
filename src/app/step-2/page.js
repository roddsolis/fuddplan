"use client";
import React from "react";
import useUserStore from "../useUserStore";

const DatosDeSalud = () => {
  const nombre = useUserStore((state) => state.nombre);
  return (
    <>
      <h1>{nombre ? `${nombre}` : ""}, para comenzar con tu evaluacion ingresa los datos necesarios en cada paso</h1>
    </>
  );
};

export default DatosDeSalud;
