import styles from "./ProjectCard.module.css";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect } from "react";

const ProjectCard = ({ title, banner, link, description, tecnologies }) => {
  const { language } = useLanguage();
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  return (
    <div className={styles.cardContainer}>
      <h2>{title}</h2>
      <div>
        <a href={link} target="_blank" alt={title}>
          <img src={banner} />
        </a>
      </div>

      <h3>{t("projects.about")}</h3>
      <p>{description}</p>
      <h3>{t("projects.technologies")}</h3>
      <p>{tecnologies}</p>
    </div>
  );
};

export default ProjectCard;
