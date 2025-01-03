import React from 'react';
import ProfileDetails from './Profile/ProfileDetails';

interface ProfileInfoProps {
  institution: string;
  careerPath: string;
  interests: string[];
}

export default function ProfileInfo({ institution, careerPath, interests }: ProfileInfoProps) {
  return (
    <div className="p-6">
      <ProfileDetails
        institution={institution}
        careerPath={careerPath}
        interests={interests}
      />
    </div>
  );
}