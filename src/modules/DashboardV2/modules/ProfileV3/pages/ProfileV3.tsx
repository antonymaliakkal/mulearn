import React, { useEffect, useState } from 'react';
import ProfileHeader from './components/Profile/ProfileHeader';
import ProfileInfo from './components/Profile/ProfileInfo';
import CompleteTasks from './components/Profile/CompleteTasks';
import AttendanceGrid from './components/Profile/AttendanceGrid';
import Leaderboard from './components/Profile/Leaderboard';

import styles from './ProvileV3.module.css';
import { fetchUserProfile } from '../service/ProfileService';
import { getCollegeTitleById } from '../service/ProfileService';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

const ProfileV3: React.FC<ProfileImageProps> = () => {
  const [userData, setUserData] = useState<any | null>(null);
  const [collegeTitle, setCollegeTitle] = useState<string>('');
  
  useEffect(() => {
    const gatherUserInfo = async () => {
      try {
        const userProfiledata = await fetchUserProfile();
        setUserData(userProfiledata.response);

        const collegeTitle = await getCollegeTitleById(userProfiledata.response?.college_id) || '';
        setCollegeTitle(collegeTitle);
      } catch (err: any) {
        console.error('Failed to fetch user info:', err);
      }
    };

    gatherUserInfo();
  }, []);

  const attendanceData = Array(100)
    .fill(0)
    .map(() => Math.random() > 0.3);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <ProfileHeader
            name={userData?.full_name || ''}
            stats={{
              karmaPoints: Math.floor(userData?.karma) || 0,
              avgKarma: (userData?.karma_distribution?.length > 0)
                        ? userData.karma / userData.karma_distribution.length
                        : 0,
              ranking: userData?.rank || 0,
            }}
          />

          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.card1}`}>
              <hr className={styles.horizontalLine} />
              <div>
                <ProfileInfo
                  institution={collegeTitle}
                  careerPath="UI/UX Designer"
                  interests={[
                    'UI Design',
                    'UI/UX',
                    'Graphic Design',
                    'Photoshop',
                    'Figma',
                    'Design Thinking',
                  ]}
                />
              </div>
            </div>

            <div className={`${styles.card} ${styles.cardShortHeight} ${styles.card2}`}>
              <CompleteTasks />
            </div>

            <div className={`${styles.card} ${styles.card3}`}>
              <AttendanceGrid
                attendance={attendanceData}
                percentage={48}
                totalSessions={124}
              />
            </div>

            <div className={`${styles.card} ${styles.card4}`}>
              <Leaderboard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileV3;
