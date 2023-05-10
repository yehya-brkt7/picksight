import styles from "./herosection.module.css";
import background from "../../assets/boxing-herosection.png";

const HeroSection = () => {
  return (
    <main className={styles.maincontainer}>
      <div className={styles.backgroundcontainer}>
        <img className={styles.background} src={background}></img>
      </div>
      <p className={styles.backgroundtext}>
        Allenati con un vero pugile e diventa il migliore !
      </p>
    </main>
  );
};

export default HeroSection;
