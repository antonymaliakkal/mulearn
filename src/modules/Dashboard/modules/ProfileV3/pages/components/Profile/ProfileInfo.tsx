import React from 'react';
import ProfileDetails from './ProfileDetails';
import styles from './ProfileInfo.module.css';

interface ProfileInfoProps {
  institution: string;
  careerPath: string;
  interests: string[];
}

export default function ProfileInfo({ institution, careerPath, interests }: ProfileInfoProps) {
  return (
    <div className={styles.container}>
      <ProfileDetails
        institution={institution}
        careerPath={careerPath}
        interests={interests}
      />
    </div>
  );
}
