import React from 'react';
import styles from './ProfileStats.module.css';

interface ProfileStatsProps {
  karmaPoints: number;
  avgKarma: number;
  ranking: number;
}

export default function ProfileStats({ karmaPoints, avgKarma, ranking }: ProfileStatsProps) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.label}>Karma Points</p>
        <p className={styles.value}>{karmaPoints.toFixed(2)}K</p>
      </div>
      <div>
        <p className={styles.label}>Avg Karma/Month</p>
        <p className={styles.value}>{avgKarma.toFixed(2)}K</p>
      </div>
      <div>
        <p className={styles.label}>Ranking</p>
        <p className={styles.valueGreen}>{ranking}</p>
      </div>
    </div>
  );
}
