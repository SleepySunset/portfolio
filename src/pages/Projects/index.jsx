import ProjectCard from "../../components/ProjectCard";
import Header from "../../layout/Header";
import styles from "./Projects.module.css"
import { projectsEN, projectsES } from "../../utils/projects";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Projects = () => {
  const { language } = useLanguage();
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  let projects;
    language === "es" ? (projects = projectsES) : (projects = projectsEN);
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              banner={project.banner}
              link={project.link}
              description={project.description}
              tecnologies={project.tecnologies}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
