import styles from "./Home.module.css";
import Header from "../../layout/Header";
import Card from "../../components/Card";
import { skills } from "../../utils/skills";

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.mainHome}>
        <div className={styles.bannerHome}>
          <img className={styles.bannerImg} src="./images/banner.webp"  alt="Banner animado Luisa García Web Dev"/>
        </div>
        <div className={styles.introContainer}>
          <h2>Mi nombre es <span>Luisa García</span> y soy desarrolladora web</h2>
          <p>
            Este es mi portafolio, un espacio pensado para compartir un poco de mi trabajo pero también para compartir mi estilo, mis habilidades y sobre todo mi gran pasión por el desarrollo web.
          </p>
          <p>¡Espero les guste!</p>
          <div className={styles.buttonContainer}>
            <button>Ver proyectos</button>
            <button>Descargar CV</button>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <img className={styles.aboutImg} src="./images/Luisa.webp" alt="Foto de Luisa García"/>
          <div>
            <h2>Acerca de mí</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              itaque non hic nisi sunt, alias ea exercitationem velit quo vitae
              quibusdam eaque quos. A et eveniet id corrupti consectetur
              necessitatibus.
            </p>
            <button>Más acerca de mí</button>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h2>Mis habilidades</h2>
          <div>
            {skills.map((skill, index) => (
              <Card
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
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
