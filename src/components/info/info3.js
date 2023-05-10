import styles from "./info3.module.css";
import gloves from "../../assets/gloves.png";
import boxer1 from "../../assets/boxer1.png";
import boxer2 from "../../assets/boxer2.png";
import boxer3 from "../../assets/boxer3.png";
import boxer4 from "../../assets/boxer4.png";
import boxer5 from "../../assets/boxer5.png";
import boxer8 from "../../assets/boxer8.png";

const Info3 = () => {
  return (
    <main className={styles.container}>
      <section className={styles.text}>
        <h1>
          Entra nella squadra di Tony Ray e{" "}
          <img src={gloves} className={styles.gloves}></img>raggiungi nuovi
          traguardi"
          <img src={gloves} className={styles.gloves}></img>
        </h1>
        <p>
          Lavoreremo insieme sodo, ma alla fine vedrai i risultati come hanno
          fatto tanti altri prima di te.
        </p>
      </section>
      <section className={styles.imagescontainer}>
        <img src={boxer1} className={styles.image}></img>
        <img src={boxer2} className={styles.image}></img>
        <img src={boxer3} className={styles.image}></img>
        <img src={boxer4} className={styles.image}></img>
        <img src={boxer5} className={styles.image}></img>
        <img src={boxer4} className={styles.image}></img>
        <img src={boxer3} className={styles.image}></img>
        <img src={boxer8} className={styles.image}></img>
        <img src={boxer2} className={styles.image}></img>
        <img src={boxer1} className={styles.image}></img>
      </section>
    </main>
  );
};

export default Info3;
