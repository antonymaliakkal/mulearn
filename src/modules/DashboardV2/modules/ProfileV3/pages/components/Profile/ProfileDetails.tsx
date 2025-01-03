import React from 'react';
import { Edit2 } from 'lucide-react';
import styles from './ProfileDetails.module.css';

interface ProfileDetailsProps {
  institution: string;
  careerPath: string;
  interests: string[];
}

export default function ProfileDetails({ institution, careerPath, interests }: ProfileDetailsProps) {
  return (
    <div className={styles.space}>
        <div className={styles.editButtonContainer}>
          <button className={styles.editButton}>
            <Edit2 className={styles.icon} />
          </button>
        </div>
      <div className={styles.container}>
      <div className={styles.containerTop}>
        <div>
          <p className={styles.institution}>Institution</p>
          <p className={styles.institutionName}>{institution}</p>
        </div>
        <div className={styles.careerPathContainer}>
          <p className={styles.careerPathLabel}>Career Path</p>
          <p className={styles.careerPathValue}>{careerPath}</p>
        </div>
      </div>

        <div>
          <p className={styles.interestsContainer}>Interests</p>
          <div className={styles.interestsWrapper}>
            {interests.map((interest) => (
              <span key={interest} className={styles.interest}>
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
