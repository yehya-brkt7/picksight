import React, { useState, useEffect, useRef } from "react";
import styles from "./boxes.module.css";
import smokeeffect from "../../assets/effect.png";
import righticon from "../../assets/righticon.png";

const Boxes = () => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState();

  useEffect(() => {
    const updateContentHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.clientHeight);
      }
    };

    updateContentHeight();
    window.addEventListener("resize", updateContentHeight);

    return () => window.removeEventListener("resize", updateContentHeight);
  }, []);

  return (
    <main className={styles.maincontainer}>
      <img
        className={styles.smokebackground}
        src={smokeeffect}
        style={{ height: contentHeight + 400 }}
      ></img>

      <section className={styles.boxes} ref={contentRef}>
        <div className={styles.box}>
          <img src={righticon} className={styles.righticon}></img>
          <h5>Trova la motivazione</h5>
          <p>
            Trova la giusta motivazione e dedizione per raggiungere i tuoi
            obiettivi, con l'aiuto della mia esperienza e passione per la boxe.
          </p>
        </div>
        <div className={styles.box}>
          <img src={righticon} className={styles.righticon}></img>
          <h5>allenati con regolarità</h5>
          <p>
            Allenati costantemente su tutti gli aspetti della boxe, dalle
            tecniche di base alla resistenza fisica, alla velocità e alla forza,
            con le mie sessioni personalizzate.
          </p>
        </div>
        <div className={styles.box}>
          <img src={righticon} className={styles.righticon}></img>
          <h5>affina la tua tecnica </h5>
          <p>
            Migliora la tua tecnica e preparati per le situazioni di
            combattimento, partecipando a sparring e incontri amatoriali con le
            mie giuste strategie di combattimento.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Boxes;
