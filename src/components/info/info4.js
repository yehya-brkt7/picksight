import styles from "./info4.module.css";
import boxer10 from "../../assets/boxer10.png";

const Info4 = () => {
  return (
    <main className={styles.container}>
      <div className={styles.imagecontainer}>
        <img src={boxer10} className={styles.image}></img>
      </div>
      <section className={styles.text}>
        <h1>
          Trasforma i tuoi sogni di pugilato in realta <span>’</span>
        </h1>
        <p>
          Se hai sempre sognato di diventare un campione di pugilato, non c'è
          mai stato un momento migliore per iniziare a trasformare i tuoi sogni
          in realtà. Con l'aiuto del coach giusto, potrai imparare le tecniche e
          le strategie necessarie per diventare un pugile di successo. <br></br>
          <br></br>
          Sia che tu stia cercando di migliorare la tua tecnica o di prepararti
          per un incontro importante, un coach esperto può aiutarti a
          raggiungere i tuoi obiettivi e diventare il pugile che hai sempre
          sognato di essere.
        </p>
        <button className={styles.btn}>Diventa il migliore</button>
      </section>
    </main>
  );
};

export default Info4;
