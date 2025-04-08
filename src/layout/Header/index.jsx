import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const activeLink = location.pathname;
  console.log(activeLink);
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
  <div className={styles.orbitContainer}>
    <span className={styles.star}></span>
    <span className={styles.star}></span>
    <span className={styles.star}></span>
    <img src="./images/logo.webp" alt="Logo" className={styles.logoDefault} />
  </div>
  <img src="./images/logoHover.webp" alt="Logo Hover" className={styles.logoHover} />
</div>


      <nav className={styles.navMenu}>
        <Link
          to="/"
          className={activeLink === "/" ? styles.navActive : styles.navOpt}
        >
          Inicio
        </Link>
        <Link
          to="/aboutme"
          className={
            activeLink === "/aboutme" ? styles.navActive : styles.navOpt
          }
        >
          Acerca de mí
        </Link>
        <Link
          to="/projects"
          className={
            activeLink === "/projects" ? styles.navActive : styles.navOpt
          }
        >
          Proyectos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
