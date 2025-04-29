import { experienceEN, experienceES } from "../../utils/experience";
import { studiesEN, studiesES } from "../../utils/studies";
import { skills } from "../../utils/skills";
import SkillCard from "../../components/SkillCard";
import JobCard from "../../components/JobCard";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleBackButton = () => {
    navigate(-1);
  };
  let experience;
  let studies;
  language === "es" ? (experience = experienceES) : (experience = experienceEN);
  language === "es" ? (studies = studiesES) : (studies = studiesEN);
  return (
    <main className={styles.mainContainer}>
      <div className={styles.backContainer}>
        <button onClick={handleBackButton}>
          <FontAwesomeIcon icon={faArrowLeft} /> {t("about.backButton")}
        </button>
      </div>
      <div className={styles.aboutContainer}>
        <div>
          <img src="./images/Luisa.webp" />
          <div className={styles.aboutTextContainer}>
            <h2>{t("about.introTitle")}</h2>
            <p>{t("about.introText1")}</p>
            <p>{t("about.introText2")}</p>
            <p>{t("about.introText3")}</p>
          </div>
        </div>
      </div>

      <div className={styles.jobContainer}>
        <div>
          <h2>
            <FontAwesomeIcon icon={faBriefcase} /> {t("about.jobsTitle")}
          </h2>
          <div>
            {experience.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                company={job.company}
                dates={job.dates}
                description={job.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.studyContainer}>
        <div>
          <h2>
            <FontAwesomeIcon icon={faGraduationCap} /> {t("about.studiesTitle")}
          </h2>
          {studies.map((study, index) => (
            <JobCard
              key={index}
              title={study.title}
              company={study.school}
              dates={study.dates}
              description={study.description}
            />
          ))}
        </div>
      </div>
      <div className={styles.techContainer}>
        <div>
          <h2>{t("about.skillsTitle")}</h2>
          <div>
            {skills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} title={skill.title} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
