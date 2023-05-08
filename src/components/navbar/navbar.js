import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
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
        <button className={styles.btn}>DIVENTA IL MIGLIORE</button>
      </nav>

      <details className={styles.details}>
        <summary className={styles.summary}></summary>
        <nav className={styles.menu}>
          <a href="#link">HOME</a>
          <a href="#link">CAMPIONE</a>
          <a href="#link">TONY RAI</a>
          <a href="#link">SQUADRA</a>
          <a href="#link">CONTATTO</a>
          <a>
            {" "}
            <button className={styles.responsivebtn}>
              DIVENTA IL MIGLIORE
            </button>
          </a>
        </nav>
      </details>
    </>
  );
};

export default Navbar;
