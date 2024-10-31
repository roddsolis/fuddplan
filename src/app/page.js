import Image from "next/image";
import styles from "../css/page.module.css"; /* esta linea aplica el css de manera modular  */

export default function Home() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <div className={styles.container1}>Contenedor</div>
    </div>
  );
}
