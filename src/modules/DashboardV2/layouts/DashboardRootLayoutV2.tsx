import { Suspense, useState } from "react";
import TopNavBarV2 from "../components/TopNavBarV2";
import SideNavBarV2 from "../components/SideNavBarV2";
import styles from "./DashboardRootLayoutV2.module.css";
import MuLoader from "@/MuLearnComponents/MuLoader/MuLoader";
import { Outlet } from "react-router-dom";
import { Profile } from "src/modules/Dashboard/modules";
import ProfileImage from "../assets/svg/ProfileImage";
import InterestGroupsImage from "../assets/svg/InterestGroupsImage";
import LearningCirclesImage from "../assets/svg/LearningCirclesImage";
import LeaderboardImage from "../assets/svg/LeaderboardImage";
import OpportunityImage from "../assets/svg/OpportunityImage";
import NotificationsImages from "../assets/svg/NotificationsImage";
import SettingsImage from "../assets/svg/SettingsImage";

export interface SidebarButton {
    id: string,
    url: string,
    title: string,
    icon: JSX.Element
};

const buttons = [
    {
        id: "Profile",
        url: "/dev/profile",
        title: "Profile",
        icon: <ProfileImage></ProfileImage>
    },
    {
        id: "Interest Group",
        url: "/dev/inerest-group",
        title: "Interest Group",
        icon: <InterestGroupsImage></InterestGroupsImage>
    },
    {
        id: "Learning Circle",
        url: "/dev/learning-circle",
        title: "Learning Circle",
        icon: <LearningCirclesImage></LearningCirclesImage>
    },
    {
        id: "Leaderboard",
        url: "/dev/leaderboard",
        title: "Leaderboard",
        icon: <LeaderboardImage></LeaderboardImage>
    },
    {
        id: "Opportunity",
        url: "/dev/opportunity",
        title: "Opportunity",
        icon: <OpportunityImage></OpportunityImage>
    },
    {
      id : "Notifications",
      url : "/dev/#",
      title : "Notifications",
      icon : <NotificationsImages></NotificationsImages>
    },
    {
      id : "Settings",
      url : "/dev/#",
      title : "Settings",
      icon : <SettingsImage></SettingsImage>
    }

];




const DashboardRootLayoutV2 = () => {

    const [currentPage, setCurrentPage] = useState('Profile');

    const handleButtonClick = (button: SidebarButton) => {
        setCurrentPage(button.id);
    }

    return (
  

        <div className={styles.full_page}> 
        <SideNavBarV2 activeButton={currentPage} 
          onButtonClick={handleButtonClick} 
          buttons={buttons} 
        /> 
        <div className={styles.right_side}> 
          <TopNavBarV2 currentPage={currentPage} /> 
          <div className={styles.main_content}> 
            <Suspense fallback={<MuLoader />}> 
              <Outlet /> 
            </Suspense> 
          </div> 
        </div> 
      </div>
    )
}

export default DashboardRootLayoutV2;