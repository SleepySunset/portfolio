import styles from "./Home.module.css";
import Header from "../../layout/Header";
import SkillCard from "../../components/SkillCard";
import { skills } from "../../utils/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleShowProjects = () => {
    navigate("/projects");
  };
  const handleShowAboutMe = () => {
    navigate("/aboutme");
  };

  const handleCVDownload = () => {
    const pdfUrl = "/documents/CVLuisaGarcia.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "CVLuisaGarcia.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <main className={styles.mainHome}>
        <div className={styles.bannerHome}>
          <img
            className={styles.bannerImg}
            src="./images/banner.webp"
            alt="Banner animado Luisa García Web Dev"
          />
        </div>
        <div className={styles.introContainer}>
          <h2>
            Mi nombre es <span>Luisa García</span> y soy desarrolladora web
          </h2>
          <p>
            Este es mi portafolio, un espacio pensado para compartir un poco de
            mi trabajo, mis proyectos, mi estilo, mis habilidades y sobre todo
            mi gran pasión por el desarrollo web. Cuento con +1 de experiencia
            en React y siempre estoy aprendiendo habilidades y tecnologías
            nuevas.
          </p>
          <p>¡Espero les guste!</p>
          <div className={styles.buttonContainer}>
            <button onClick={handleShowProjects}>Ver proyectos</button>
            <button onClick={handleCVDownload}>
              <FontAwesomeIcon icon={faDownload} /> Descargar CV
            </button>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <img
            className={styles.aboutImg}
            src="./images/Luisa.webp"
            alt="Foto de Luisa García"
          />
          <div>
            <h2>Acerca de mí</h2>
            <p>
              ¡Me encanta programar! No hay nada mejor que la satisfacción de
              resolver un problema. Soy una líder nata y trabajar en equipo se
              me da súper bien. Pienso que las palabras son herramientas
              increíbles y que la empatía y el respeto deben ser la base de
              todas las relaciones.
            </p>
            <button onClick={handleShowAboutMe  }>Más acerca de mí</button>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h2>Mis habilidades</h2>
          <div>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
              />
            ))}
          </div>
        </div>
        <div className={styles.projectsContainer}>
          <h2>Algunos de mis proyectos</h2>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
