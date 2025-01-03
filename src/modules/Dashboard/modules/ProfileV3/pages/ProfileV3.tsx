import React from 'react';
import SearchBar from './components/Profile/SearchBar';
import ProfileHeader from './components/Profile/ProfileHeader';
import ProfileInfo from './components/Profile/ProfileInfo';
import CompleteTasks from './components/Profile/CompleteTasks';
import AttendanceGrid from './components/Profile/AttendanceGrid';
import Leaderboard from './components/Profile/Leaderboard';

interface Props {
}

const ProfileV3: React.FC<Props> = () => {
  
  const attendanceData = Array(48)
    .fill(0)
    .map(() => Math.random() > 0.3);

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium">Profile</h1>
            <SearchBar />
          </div>
          <ProfileHeader
                name="Edwin Emmanuel Roy"
                stats={{
                  karmaPoints: 24.56,
                  avgKarma: 2.59,
                  ranking: 14458,
                }}
              />

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

              <hr className="border-gray-100" />
              <div>
              <ProfileInfo
                institution="College of Engineering Trivandrum"
                careerPath="UI/UX Designer"
                interests={['UI Design', 'UI/UX', 'Graphic Design', 'Photoshop', 'Figma', 'Design Thinking']}
              />

              </div>
             
            </div>

          
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden h-[151px]">
              <CompleteTasks />
        
              </div>
             
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                 
                  <AttendanceGrid
                  attendance={attendanceData}
                  percentage={48}
                  totalSessions={124}
                />
                </div>
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                  <Leaderboard />
                </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileV3;
