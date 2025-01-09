import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './CompleteTasks.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

interface CompleteTasksProps {
  percentage: number; // Define the type of `percentage`
}

export default function CompleteTasks({ percentage } : CompleteTasksProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.actionWrapper}>
          <div className={styles.circleWrapper}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className={styles.circlePercentage}
              styles={buildStyles({
                textSize: '24px',
                pathColor: '#0B7C31',
                textColor: '#22c55e',
                trailColor: '#e6e6e6'
              })}
            />
          </div>
          <ChevronRight className={styles.chevronIcon} />
        </div>
        <div>
          <h3 className={styles.headerText}>Complete Tasks</h3>
          <p className={styles.subText}>Learn more about journey completing tasks</p>
        </div>
        
      </div>
    </div>
  );
}
