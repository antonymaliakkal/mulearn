import React from 'react';
import styles from './InterestGroupV2.module.css';
import InterestItem from '../components/InterestItem';

import webdev from '../assets/webdev.png';
import ai from '../assets/ai.png';
import cybersecurity from '../assets/cybersecurity.png';
import mobiledev from '../assets/mobiledev.png';
import gamedev from '../assets/gamedev.png';
import datascience from '../assets/datascience.png';
import blockchain from '../assets/blockchain.png';

interface GridItem {
  id: number;
  name: string;
  imageUrl: string;
}

const gridData: GridItem[] = [
  { id: 1, name: 'Web Development', imageUrl: webdev },
  { id: 2, name: 'Artificial Intelligence', imageUrl: ai },
  { id: 3, name: 'Cybersecurity', imageUrl: cybersecurity },
  { id: 4, name: 'Mobile Development', imageUrl: mobiledev },
  { id: 5, name: 'Game Development', imageUrl: gamedev },
  { id: 6, name: 'Data Science', imageUrl: datascience },
  { id: 7, name: 'Blockchain', imageUrl: blockchain },
  { id: 8, name: 'Game Development', imageUrl: gamedev },
  { id: 9, name: 'Data Science', imageUrl: datascience },
];

const GridPage: React.FC = () => {
  return (
    <div className={styles.outerContainer}>
      <h2 className={styles.gridTitle}>Software</h2>
      <div className={styles.gridContainer}>
        {gridData.map((item) => (
          <InterestItem
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default GridPage;
