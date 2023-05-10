import styles from "./footer.module.css";
import smokebackground from "../../assets/effect2.png";
import logo from "../../assets/logo.png";
import fb from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedIn.png";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.title}>
        <img className={styles.img} src={smokebackground}></img>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={styles.navItems}>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">CAMPIONE</a>
          </li>
          <li>
            <a href="#">TONY RAI</a>
          </li>
          <li>
            <a href="#">SQUADRA</a>
          </li>
          <li>
            <a href="#">CONTATTO</a>
          </li>
        </ul>
        <div className={styles.socials}>
          <img src={fb}></img>
          <img src={insta}></img>
          <img src={twitter}></img>
          <img src={linkedin}></img>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
