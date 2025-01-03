import React from 'react';
import { Crown } from 'lucide-react';
import styles from './LeaderboardCard.module.css';

interface LeaderboardCardProps {
  name: string;
  points: number;
  position: number;
  barHeight: number;
}

export default function LeaderboardCard({
  name,
  points,
  position,
  barHeight,
}: LeaderboardCardProps) {
  return (
    <div className={styles.container}>
      {position === 1 && (
        <Crown className={styles.crownIcon} />
      )}
      <div className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.points}>{points}K</p>
      <div
        className={styles.bar}
        style={{ height: `${barHeight}px` }}
      />
    </div>
  );
}
