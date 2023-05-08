import styles from "./info2.module.css";
import boxer from "../../assets/boxer.png";
import trophy from "../../assets/trophy.png";

const Info2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <img src={boxer} className={styles.image}></img>
      </div>
      <div className={styles.text}>
        <h1>
          La mia passione per la boxe e il mio sogno di allenare campioni{" "}
          <img src={trophy}></img>
        </h1>
        <p>
          Ciao, sono Tony Ray, l'ex campione di pesi welter che ha deciso di
          dedicarsi all'allenamento di nuovi campioni della boxe. La mia
          passione per questo sport è nata quando ero solo un ragazzino, ed è
          cresciuta fino a diventare la mia professione e la mia vita. <br></br>
          <br></br>
          Ho vissuto momenti di gloria, ma anche momenti difficili, con
          infortuni e sconfitte. Tuttavia, ho sempre creduto in me stesso e ho
          continuato a lavorare sodo per raggiungere i miei obiettivi. E oggi,
          grazie alla mia esperienza e alla mia passione per la boxe, voglio
          trasmettere tutto quello che ho imparato e aiutare gli altri a
          realizzare i loro sogni.
        </p>
        <button className={styles.btn}>prenota una chiamata</button>
      </div>
    </div>
  );
};

export default Info2;
