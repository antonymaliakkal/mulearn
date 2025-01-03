import React from 'react';
import ProfileBasicInfo from './ProfileBasicInfo';
import ProfileStats from './ProfileStats';
import Avatar from '../../../assets/Avatar.png'

import styles from './ProfileHeader.module.css';

interface ProfileHeaderProps {
  name: string;
  stats: {
    karmaPoints: number;
    avgKarma: number;
    ranking: number;
  };
}

export default function ProfileHeader({ name, stats }: ProfileHeaderProps) {
  return (
    <div className={styles.container}>
      <ProfileBasicInfo
        name={name}
        // avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
        avatarUrl={Avatar}
      />
      <ProfileStats {...stats} />
    </div>
  );
}
