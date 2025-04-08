import Header from "../../layout/Header";
import { experience } from "../../utils/experience";
import { studies } from "../../utils/studies";
import { skills } from "../../utils/skills";
import SkillCard from "../../components/SkillCard";
import JobCard from "../../components/JobCard";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <>
      <Header></Header>
      <main className={styles.mainContainer}>
        <div className={styles.backContainer}>
          <button onClick={handleBackButton}>
            <FontAwesomeIcon icon={faArrowLeft} /> Volver
          </button>
        </div>
        <div className={styles.aboutContainer}>
          <img src="./images/Luisa.webp" />
          <div className={styles.aboutTextContainer}>
            <h2>Sobre mí</h2>
            <p>
              Mi primer contacto con la programación fue a los 12 años, viendo a
              mi hermano mayor —estudiante de ingeniería de sistemas— pasar
              noches enteras escribiendo código. Su dedicación y pasión por
              aprender me enseñaron que en este mundo siempre hay que ir un paso
              más allá. Él ha sido, y sigue siendo, una gran inspiración para
              mí.
            </p>
            <p>
              A los 15 programé por primera vez en una materia electiva del
              colegio. Aunque los retos eran simples, descubrí la gratificante
              satisfacción de resolver problemas lógicos con solo unas líneas de
              código.
            </p>
            <p>
              A día de hoy disfruto profundamente de crear soluciones que
              combinan funcionalidad y belleza. Me encanta que mi trabajo
              consista en resolver problemas con con estilo.
            </p>
          </div>
        </div>

        <div className={styles.jobContainer}>
          <h2>
            <FontAwesomeIcon icon={faBriefcase} /> Experiencia Laboral
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
        <div className={styles.studyContainer}>
          <h2>
            {" "}
            <FontAwesomeIcon icon={faGraduationCap} /> Estudios
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
        <div className={styles.techContainer}>
          <h2>Mis habilidades</h2>
          <div>
            {skills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} title={skill.title} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
