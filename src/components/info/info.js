import styles from "./info.module.css";
import ring from "../../assets/ring.png";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>
          Il prezzo da pagare per diventare un <span>campione</span>
        </h1>
        <p>
          Essere un campione non è facile, richiede una grande quantità di
          lavoro, sacrificio e dedizione. Non ci sono scorciatoie o soluzioni
          magiche. Devi essere pronto a metterti alla prova ogni giorno e a
          lavorare sodo, anche quando ti sembra di non avere più energie. Devi
          essere disposto a sacrificare le tue abitudini e a fare scelte
          difficili. Questo è il prezzo che devi pagare per diventare un
          campione.
        </p>
        <button className={styles.btn}>prenota una chiamata</button>
      </div>
      <div className={styles.imagecontainer}>
        <img src={ring} className={styles.image}></img>
        <div className={styles.ellipse}></div>
      </div>
    </div>
  );
};

export default Info;
