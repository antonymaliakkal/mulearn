import React from 'react';
import SearchBar from './components/Profile/SearchBar';
import ProfileHeader from './components/Profile/ProfileHeader';
import ProfileInfo from './components/Profile/ProfileInfo';
import CompleteTasks from './components/Profile/CompleteTasks';
import AttendanceGrid from './components/Profile/AttendanceGrid';
import Leaderboard from './components/Profile/Leaderboard';

import styles from './ProvileV3.module.css';

interface Props {}

const ProfileV3: React.FC<Props> = () => {
  const attendanceData = Array(100)
    .fill(0)
    .map(() => Math.random() > 0.3);

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          {/* <div className={styles.header}>
            <h1 className={styles.headerTitle}>Profile</h1>
            <SearchBar />
          </div> */}
          <ProfileHeader
            name="Edwin Emmanuel Roy"
            stats={{
              karmaPoints: 24.56,
              avgKarma: 2.59,
              ranking: 14458,
            }}
          />

          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.card1}`}>
              <hr className={styles.horizontalLine} />
              <div>
                <ProfileInfo
                  institution="College of Engineering Trivandrum"
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
