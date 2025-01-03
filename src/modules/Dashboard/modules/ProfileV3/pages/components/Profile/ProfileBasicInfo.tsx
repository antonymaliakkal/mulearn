import React from 'react';
import { User } from 'lucide-react';
import './ProfileBasicInfo.css'; 

interface ProfileBasicInfoProps {
  name: string;
  avatarUrl?: string;
}

export default function ProfileBasicInfo({ name, avatarUrl }: ProfileBasicInfoProps) {
  return (
    <div className="profile-container">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="avatar"
        />
      ) : (
        <div className="avatar-default">
          <User className="avatar-icon" />
        </div>
      )}
      <div>
        <h2 className="name">{name}</h2>
        <button className="profile-button">
          View Public Profile
        </button>
      </div>
    </div>
  );
}
