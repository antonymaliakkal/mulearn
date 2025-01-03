import React from 'react';
import { Crown } from 'lucide-react';
import styles from './Leaderboard.module.css';
import Edwin from '../../../../../../DashboardV2/assets/images/Avatars/Edwin.png'
import Anna from '../../../../../../DashboardV2/assets/images/Avatars/Anna.png'
import Alexa from '../../../../../../DashboardV2/assets/images/Avatars/Alexa.png'

export default function Leaderboard() {
  const entries = [
    { name: 'Anna', points: 45.5, position: 2, height: 100 , src : Anna, color: '#B4E5BC' },
    { name: 'Edwin', points: 45.5, position: 1, height: 150 , src : Edwin, color: '#CCC1F0' },
    { name: 'Alexa', points: 45.5, position: 3, height: 80 , src : Alexa, color: '#F3ABA7'},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>Leaderboard</h3>
        <button className={styles.viewAllButton}>View All</button>
      </div>
      <div className={styles.gradientBg}>
        <div className={styles.entriesWrapper}>
          {entries.map((entry) => (
            <div key={entry.name} className={styles.entry}>
              {entry.position === 1 && (
                <Crown className={styles.crownIcon} />
              )}
              <div className={styles.avatar} style={{ backgroundColor: entry.color}}>
                <img className={styles[`avatar${entry.position}`]} src={entry.src} alt={entry.name.charAt(0)} />
              </div>
              <p className={styles.name}>{entry.name}</p>
              <p className={styles.points}>{entry.points}K</p>
              <div
                className={styles.bar}
                style={{ height: `${entry.height}px` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
