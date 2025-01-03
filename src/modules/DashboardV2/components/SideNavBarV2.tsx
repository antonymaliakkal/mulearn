import { MuButton } from "@/MuLearnComponents/MuButtons/MuButton";
import styles from "./SideNavBarV2.module.css";
import MulearnBrand from "../assets/svg/MulearnBrand";
import ProfileImage from "../assets/svg/ProfileImage";
import InterestGroupsImage from "../assets/svg/InterestGroupsImage";
import LearningCirclesImage from "../assets/svg/LearningCirclesImage";
import LeaderboardImage from "../assets/svg/LeaderboardImage";
import OpportunityImage from "../assets/svg/OpportunityImage";
import NotificationsImages from "../assets/svg/NotificationsImage";
import SettingsImage from "../assets/svg/SettingsImage";

interface SidebarButton {
    id : string;
    url : string,
    title : string,
    icon : JSX.Element
};  


interface SideNavBarProps {
  activeButton: string;
  onButtonClick: (button: SidebarButton) => void;
  buttons: SidebarButton[];
}

const SideNavBarV2 = ({ activeButton, onButtonClick, buttons }: SideNavBarProps) => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.mulearn_brand}>
        <MulearnBrand />
      </div>
      {buttons.map((button) => (
        <MuButton
          text={button.title}
          icon={button.icon}
          key={button.id}
          className={`${styles.button} ${activeButton === button.id ? styles.buttonActive : ''
            }`}
          onClick={() => onButtonClick(button)}
        />
      ))}
    </nav>
  )
}


export default SideNavBarV2;