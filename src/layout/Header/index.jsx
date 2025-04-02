import { Link } from "react-router-dom";
import styles from "./Header.module.css"


const Header = () => {
  return (
    <header className={styles.header}>
      <img src="./images/logo.webp" alt="Logo Portafolio" className={styles.logo}/>
      <nav className={styles.navMenu}>
        <Link to="/" className={styles.navOpt}>Inicio</Link>
        <Link to="/aboutme" className={styles.navOpt}>Acerca de mí</Link>
        <Link to="/projects" className={styles.navOpt}>Proyectos</Link>
      </nav>
    </header>
  );
};

export default Header;
