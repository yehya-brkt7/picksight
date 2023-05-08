import styles from "./questions.module.css";
import arrowdown from "../../assets/arrow-down.png";

const Questions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          Qual è il segreto per diventare un campione di boxe<span>?</span>
        </h1>
      </div>
      <div className={styles.questions}>
        <div className={styles.firstcolumn}>
          <div>
            <p>Qual è il segreto per diventare un campione di boxe?</p>
            <img src={arrowdown}></img>
          </div>
          <div>
            <p>
              Quali sono gli errori più comuni che i principianti fanno nella
              boxe?
            </p>
            <img src={arrowdown}></img>
          </div>
          <div>
            <p>
              Posso allenarmi con te anche se non ho mai praticato la boxe
              prima?
            </p>
            <img src={arrowdown}></img>
          </div>
          <div>
            <p>Posso avere sessioni di allenamento personalizzate con te?</p>
            <img src={arrowdown}></img>
          </div>

          <div>
            <p>
              Quali sono le differenze tra pugilato amatoriale e quello
              professionale?
            </p>
            <img src={arrowdown}></img>
          </div>
        </div>
        <div className={styles.secondcolumn}>
          <div>
            <p>
              Come posso migliorare la mia resistenza fisica per i
              combattimenti?
            </p>
            <img src={arrowdown}></img>
          </div>
          <div>
            <p>Come gestisci gli infortuni dei tuoi atleti?</p>
            <img src={arrowdown}></img>
          </div>
          <div>
            <p>
              Quali sono i consigli che dai ai tuoi atleti per la preparazione
              mentale?
            </p>
            <img src={arrowdown}></img>
          </div>
          <div>
            <p>
              Quali sono le strategie migliori per affrontare un combattimento?
            </p>
            <img src={arrowdown}></img>
          </div>
          <div>
            <p>Quali sono le tecniche di respirazione migliori per la boxe?</p>
            <img src={arrowdown}></img>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <h1>Hai altre domade?</h1>
        <p>
          Perfetto, scrivi pure! Ma fammi sapere chi sei e quali sono i tuoi
          obiettivi.
        </p>
        <button>+34 346 789 456</button>
      </div>
    </div>
  );
};

export default Questions;
