import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, banner, link, description, tecnologies }) => {
  return (
    <div className={styles.cardContainer}>
      <h2>{title}</h2>
      <div>
        <a href={link} target="_blank" alt={title}>
          <img src={banner} />
        </a>
      </div>

      <h3>Acerca del proyecto</h3>
      <p>{description}</p>
      <h3>Tecnologías usadas</h3>
      <p>{tecnologies}</p>
    </div>
  );
};

export default ProjectCard;
