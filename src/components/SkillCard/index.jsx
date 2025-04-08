import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SkillCard.module.css";

const Card = ({ icon, title }) => {
  return (
    <div className={styles.cardContainer}>
      <FontAwesomeIcon icon={icon} size="2x" className={styles.cardIcon} /> 
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
