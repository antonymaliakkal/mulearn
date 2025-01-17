import { Suspense, useEffect, useState } from "react";
import TopNavBarV2 from "../components/TopNavBarV2";
import SideNavBarV2 from "../components/SideNavBarV2";
import styles from "./DashboardRootLayoutV2.module.css";
import MuLoader from "@/MuLearnComponents/MuLoader/MuLoader";
import { Navigate, Outlet } from "react-router-dom";
import { Profile } from "src/modules/Dashboard/modules";
import ProfileImage from "../assets/svg/ProfileImage";
import InterestGroupsImage from "../assets/svg/InterestGroupsImage";
import LearningCirclesImage from "../assets/svg/LearningCirclesImage";
import LeaderboardImage from "../assets/svg/LeaderboardImage";
import OpportunityImage from "../assets/svg/OpportunityImage";
import NotificationsImages from "../assets/svg/NotificationsImage";
import SettingsImage from "../assets/svg/SettingsImage";
import { useNavigate } from "react-router-dom";

export interface SidebarButton {
    id: string;
    url: string;
    title: string;
    icon: JSX.Element;
}

const buttons = [
    {
        id: "Profile",
        url: "/dev/profile",
        title: "Profile",
        icon: <ProfileImage />
    },
    {
        id: "Interest Group",
        url: "/dev/inerest-group",
        title: "Interest Group",
        icon: <InterestGroupsImage />
    },
    {
        id: "Learning Circle",
        url: "/dev/learning-circle",
        title: "Learning Circle",
        icon: <LearningCirclesImage />
    },
    {
        id: "Leaderboard",
        url: "/dev/leaderboard",
        title: "Leaderboard",
        icon: <LeaderboardImage />
    },
    {
        id: "Opportunity",
        url: "/dev/opportunity",
        title: "Opportunity",
        icon: <OpportunityImage />
    },
    {
        id: "Notifications",
        url: "/dev/#",
        title: "Notifications",
        icon: <NotificationsImages />
    },
    {
        id: "Settings",
        url: "/dev/#",
        title: "Settings",
        icon: <SettingsImage />
    }
];

const DashboardRootLayoutV2 = () => {
    const [currentPage, setCurrentPage] = useState("Profile");
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true); // New state for loading
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate access token loading
        const checkToken = async () => {
            const token = await new Promise((resolve) =>
                setTimeout(() => resolve(localStorage.getItem("accessToken")), 3000)
            );
            if (token) {
                setIsLoading(false); // Stop loading once token is available
            } else {
                // Optionally, navigate to a login page if no token
                navigate("/login");
            }
        };
        checkToken();
    }, [navigate]);

    const handleButtonClick = (button: SidebarButton) => {
        setCurrentPage(button.id);
        navigate(button.url);
    };

    const rightSideClasses = `${styles.right_side} ${
        !isSidebarVisible ? styles.sidebar_collapsed : ""
    }`;

 

    return (
        <div className={styles.full_page}>
            <SideNavBarV2
                activeButton={currentPage}
                onButtonClick={handleButtonClick}
                buttons={buttons}
            />
            <div className={rightSideClasses}>
                <TopNavBarV2 currentPage={currentPage} />
                <div className={styles.main_content}>
                    <Suspense fallback={<MuLoader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default DashboardRootLayoutV2;
