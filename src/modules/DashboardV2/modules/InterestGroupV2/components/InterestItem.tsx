import React from 'react';
import styles from '../pages/InterestGroupV2.module.css';

interface InterestItemProps {
  imageUrl: string;
  name: string;
}

const InterestItem: React.FC<InterestItemProps> = ({ imageUrl, name }) => {
  return (
    <div className={styles.gridItem}>
      <img src={imageUrl} alt={name} className={styles.gridImage} />
      <p className={styles.gridName}>{name}</p>
    </div>
  );
};

export default InterestItem;
