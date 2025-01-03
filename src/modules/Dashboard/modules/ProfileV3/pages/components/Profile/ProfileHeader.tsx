import React from 'react';
import ProfileBasicInfo from './Profile/ProfileBasicInfo';
import ProfileStats from './Profile/ProfileStats';

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
    <div className="p-6 flex justify-between items-start">
      <ProfileBasicInfo 
        name={name}
        avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
      />
      <ProfileStats {...stats} />
    </div>
  );
}