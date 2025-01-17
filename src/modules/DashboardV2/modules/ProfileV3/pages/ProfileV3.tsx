import React, { useEffect, useState } from 'react';
import ProfileHeader from './components/Profile/ProfileHeader';
import ProfileInfo from './components/Profile/ProfileInfo';
import CompleteTasks from './components/Profile/CompleteTasks';
import AttendanceGrid from './components/Profile/AttendanceGrid';
import Leaderboard from './components/Profile/Leaderboard';

import styles from './ProvileV3.module.css';
import { fetchUserProfile } from '../service/ProfileService';
import { getCollegeTitleById } from '../service/ProfileService';
import { background } from '@chakra-ui/react';
import MuLoader from '@/MuLearnComponents/MuLoader/MuLoader';

interface ProfileImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

const ProfileV3: React.FC<ProfileImageProps> = () => {
  const [userData, setUserData] = useState<any | null>(null);
  const [collegeTitle, setCollegeTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true); // New state for loading

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

  
  

  
  useEffect(() => {
    
    const checkToken = async () => {
      console.log("entered");
      const token = await new Promise((resolve) =>
          setTimeout(() => resolve(localStorage.getItem("accessToken")), 100)
      );
      console.log(token);
      if (token) {
          setIsLoading(false); // Stop loading once token is available
          gatherUserInfo();
      }
  };
     
      checkToken();
  }, []);



  const attendanceData = Array(100)
    .fill(0)
    .map(() => Math.random() > 0.3);

  return (
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.wrapper}>
            <ProfileHeader
              avatar={userData?.profile_pic}
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
                    interests={userData?.interest_groups ? userData.interest_groups.map((group: { name: string }) => group.name) : []}
                  />
                </div>
              </div>
              <div className={`${styles.card} ${styles.cardShortHeight} ${styles.card2}`}>
                <CompleteTasks percentage={ Math.ceil(userData?.percentile * 100) }/>
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
