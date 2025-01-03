import React from 'react';
import { Crown } from 'lucide-react';
import styles from './Leaderboard.module.css';

export default function Leaderboard() {
  const entries = [
    { name: 'Edwin', points: 45.5, position: 1, height: 120 },
    { name: 'Anna', points: 45.5, position: 2, height: 100 },
    { name: 'Alma', points: 45.5, position: 3, height: 80 },
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
              <div className={styles.avatar} />
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
