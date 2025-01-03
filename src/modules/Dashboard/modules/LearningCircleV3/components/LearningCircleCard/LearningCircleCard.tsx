import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription
} from "../../../../../../components/MuComponents/MuCard/Card";
import styles from "./LearningCircleCard.module.css";

interface LearningCircleCardProps {
  image: string;
  title: string;
  subtitle: string;
  joinedText: string;
}

const LearningCircleCard: React.FC<LearningCircleCardProps> = ({
  image,
  title,
  subtitle,
  joinedText
}) => {
  return (
    <div className={styles.cardContainer}>
      <Card style={{ marginTop: "20px", borderRadius: "16px" }}>
        <CardHeader>
          <img src={image} alt={title} className={styles.cardImage} />
          <CardTitle className={styles.cardTitle}>{title}</CardTitle>
          <CardDescription className={styles.cardDescription}>
            {subtitle}
          </CardDescription>
        </CardHeader>
        <CardFooter className={styles.cardFooter}>
          <p className={styles.joinedText}>{joinedText}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LearningCircleCard;
