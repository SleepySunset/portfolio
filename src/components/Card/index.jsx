import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.module.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.cardContainer}>
      <FontAwesomeIcon icon={icon} size="2x" className={styles.cardIcon} /> 
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
