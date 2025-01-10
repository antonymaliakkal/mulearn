import { useState, useEffect } from "react";
import { MuButton } from "@/MuLearnComponents/MuButtons/MuButton";
import styles from "./SideNavBarV2.module.css";
import MulearnBrand from "../assets/svg/MulearnBrand";

interface SidebarButton {
  id: string;
  url: string;
  title: string;
  icon: JSX.Element;
}

interface SideNavBarProps {
  activeButton: string;
  onButtonClick: (button: SidebarButton) => void;
  buttons: SidebarButton[];
}

const SideNavBarV2 = ({
  activeButton,
  onButtonClick,
  buttons,
}: SideNavBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth <= 900);
  const [isSidebarVisible, setIsSidebarVisible] = useState(!isCollapsed);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsCollapsed(true);
        setIsSidebarVisible(false);
      } else {
        setIsCollapsed(false);
        setIsSidebarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <>
      {/* Hamburger Menu */}
      {isCollapsed && !isSidebarVisible && (
        <div className={styles.menu_btn} onClick={toggleSidebar}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      )}

      {/* Sidebar */}
      <nav
        className={`${styles.sidebar} ${
          isSidebarVisible ? styles.sidebarVisible : styles.sidebarHidden
        }`}
      >
        <div className={styles.mulearn_brand}>
          <MulearnBrand />
        </div>
        {buttons.map((button) => (
          <MuButton
            text={button.title}
            icon={button.icon}
            key={button.id}
            className={`${styles.button} ${
              activeButton === button.id ? styles.buttonActive : ""
            }`}
            onClick={() => onButtonClick(button)}
          />
        ))}

        {/* Left Arrow Button */}
        {isSidebarVisible && (
          <div className={styles.toggle_arrow} onClick={toggleSidebar}>
            <i className="fas fa-chevron-left"></i>
          </div>
        )}
      </nav>
    </>
  );
};

export default SideNavBarV2;
