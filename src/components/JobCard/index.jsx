import styles from "./JobCard.module.css"

const JobCard = ({ title, company, dates, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftContainer}>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <span>{dates}</span>
      </div>

      <p className={styles.rightContainer}>{description}</p>
    </div>
  );
};

export default JobCard;
