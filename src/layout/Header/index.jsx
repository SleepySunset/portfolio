import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { t } = useTranslation("global");
  const location = useLocation();
  const activeLink = location.pathname;
  const { language, changeLanguage } = useLanguage();


  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <div className={styles.orbitContainer}>
          <span className={styles.star}></span>
          <span className={styles.star}></span>
          <span className={styles.star}></span>
          <img
            src="./images/logo.webp"
            alt="Logo"
            className={styles.logoDefault}
          />
        </div>
        <img
          src="./images/logoHover.webp"
          alt="Logo Hover"
          className={styles.logoHover}
        />
      </div>

      <nav className={styles.navMenu}>
        <Link
          to="/"
          className={activeLink === "/" ? styles.navActive : styles.navOpt}
        >
          {t("header.home")}
        </Link>
        <Link
          to="/aboutme"
          className={
            activeLink === "/aboutme" ? styles.navActive : styles.navOpt
          }
        >
          {t("header.about")}
        </Link>
        <Link
          to="/projects"
          className={
            activeLink === "/projects" ? styles.navActive : styles.navOpt
          }
        >
          {t("header.projects")}
        </Link>
        <button
          onClick={() => changeLanguage("en")}
          className={language === "en" ? styles.langActive : styles.langInactive}
        >
          <img src="/images/en.webp" alt="English" />
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className={language === "es" ? styles.langActive : styles.langInactive}
        >
          <img src="/images/es.webp" alt="Español" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
