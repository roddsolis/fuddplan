import React from "react";
import styles from "@/css/home.module.css";

const Home = () => {
  const brandName = "Fuddplan";

  return (
    // contenedor de titulo y bajada
    <div className={styles.mainContent}>
      <div className={styles.homeTitleContainer}>
        <h1 className={styles.homeTitle}>Bienvenido a {brandName}</h1>
        <p className={styles.homeParagraph1}>La primera app que organiza tu alimentación semanal para cumplir con tus objetivos nutricionales.</p>
      </div>
      {/* contenedor de las caracteristicas principales */}
      <div className={styles.homefeaturesContainer}>
        <h3 className={styles.homeQuestion}>¿Qué puedes obtener en fuddplan?</h3>
        <ol className={styles.homeList}>
          <li>evaluaciones constantes para monitorear tu progreso</li>
          <li>creacion de planes de alimentacion semanales</li>
          <li>preparacion de alimentos con recetas simples</li>
          <li>recomendaciones de productos naturales y suplementos</li>
          <li>monitoreo de tu consumo de vitaminas, agua , macronutrientes y micronutrientes </li>
        </ol>
      </div>
      {/* contendor del call to action */}
      <div className={styles.homeCtaContainer}>
        <p className={styles.homeParagraph2}>Obten una evaluación gratis y conoce nuestros planes.</p>
        <button className={styles.homeButton}>Iniciar evaluación</button>
      </div>
    </div>
  );
};

export default Home;
