import React from 'react';
import styles from './StatsCard.module.css';

interface StatsCardProps {
  label: string;
  value: string;
  valueColor?: string; // Pass the CSS class name for custom colors
}

export default function StatsCard({
  label,
  value,
  valueColor = styles.textGray900, // Default to gray-900 equivalent class
}: StatsCardProps) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <p className={`${styles.value} ${valueColor}`}>{value}</p>
    </div>
  );
}
