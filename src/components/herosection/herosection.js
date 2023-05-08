import styles from "./herosection.module.css";
import background from "../../assets/boxing-herosection.png";

const HeroSection = () => {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.backgroundcontainer}>
          <img className={styles.background} src={background}></img>
        </div>
        <p className={styles.backgroundtext}>
          Allenati con un vero pugile e diventa il migliore !
        </p>
      </div>
    </>
  );
};

export default HeroSection;
