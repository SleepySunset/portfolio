import styles from "./Home.module.css";
import SkillCard from "../../components/SkillCard";
import { skills } from "../../utils/skills";
import { projectsEN } from "../../utils/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Home = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleShowProjects = () => {
    navigate("/projects");
  };
  const handleShowAboutMe = () => {
    navigate("/aboutme");
  };

  const handleCVDownload = () => {
    if (language == "es") {
      const pdfUrl = "/documents/CVEspanol.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "CVEspanol.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    if (language == "en") {
      const pdfUrl = "/documents/CVEnglish.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "CVEnglish.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <main className={styles.mainHome}>
      <div className={styles.bannerHome}>
        <img
          className={styles.bannerImg}
          src="./images/bannerLogo.webp"
          alt="Banner animado Luisa García Web Dev"
        />
        <img
          className={styles.bannerImg}
          src="./images/bannerTexto.jpg"
          alt="Banner animado Luisa García Web Dev"
        />
      </div>
      <div className={styles.introContainer}>
        <div>
          <h2>
            {t("home.introTitle1")}
            <span>{t("home.introTitle2")}</span>
            {t("home.introTitle3")}
          </h2>
          <p>{t("home.introText1")}</p>
          <p>{t("home.introText2")}</p>
          <div className={styles.buttonContainer}>
            <button onClick={handleShowProjects}>
              {t("home.introButton1")}
            </button>
            <button onClick={handleCVDownload}>
              <FontAwesomeIcon icon={faDownload} /> {t("home.introButton2")}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <div>
          <img
            className={styles.aboutImg}
            src="./images/Luisa.webp"
            alt="Foto de Luisa García"
          />
          <div>
            <h2>{t("home.aboutTitle")}</h2>
            <p>{t("home.aboutText")}</p>
            <button onClick={handleShowAboutMe}>{t("home.aboutButton")}</button>
          </div>
        </div>
      </div>
      <div className={styles.skillsContainer}>
        <div>
          <h2>{t("home.skillsTitle")}</h2>
          <div>
            {skills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} title={skill.title} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <h2>{t("home.projectsTitle")}</h2>
        <div>
          {projectsEN.map((project, index) => (
            <div key={index}>
              <a href={project.link} target="_blank">
                <img src={project.banner} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
