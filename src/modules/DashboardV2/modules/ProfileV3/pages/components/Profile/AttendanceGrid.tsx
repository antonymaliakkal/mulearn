import React from 'react';
import styles from './AttendanceGrid.module.css';

interface AttendanceGridProps {
  attendance: boolean[];
  percentage: number;
  totalSessions: number;
}

export default function AttendanceGrid({ attendance, percentage, totalSessions }: AttendanceGridProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Learning Circle Attendance</h3>
        <span className={styles.subText}><span className={styles.percentage}>{percentage}%</span> ({totalSessions} last 10 LC Sessions)</span>
      </div>
      <div className={styles.grid}>
        {attendance.map((present, idx) => (
          <div
            key={idx}
            className={`${styles.cell} ${present ? styles.present : styles.absent}`}
          />
        ))}
      </div>
    </div>
  );
}
