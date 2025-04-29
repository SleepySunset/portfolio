import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { language } = useLanguage();
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <footer>
      <div>
        <ul className={styles.menuNav}>
          <Link to="/">{t("footer.nav1")}</Link>
          <Link to="/aboutme">{t("footer.nav2")}</Link>
          <Link to="/projects">{t("footer.nav3")}</Link>
        </ul>
        <ul className={styles.menuNav}>
          <a
            href="https://www.linkedin.com/in/luisa-garcía-854527244/"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/SleepySunset" target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:luisa.garcia1331@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </ul>
      </div>

      <p>{t("footer.copy")}</p>
    </footer>
  );
};

export default Footer;
