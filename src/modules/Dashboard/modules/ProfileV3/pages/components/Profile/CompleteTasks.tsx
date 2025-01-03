import React from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './CompleteTasks.module.css';

export default function CompleteTasks() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.actionWrapper}>
          <div className={styles.circleWrapper}>
            <svg className={styles.svgCircle}>
              <circle
                className={styles.circleBackground}
                strokeWidth="3"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
              />
              <circle
                className={styles.circleProgress}
                strokeWidth="3"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * 0.1}`}
              />
            </svg>
            <span className={styles.percentageText}>90%</span>
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
