import React from "react";
import AllLearningCircles from "../components/AllLearningCircles/AllLearningCircles";
import LearningCircleWithUpcomingMeets from "../components/LearningCircleWithUpcomingMeets/LearningCircleWithUpcomingMeets";
import styles from "./LearningCircleV3.module.css";

// Static image import
import Event1 from "../../../assets/images/Events/Event1.png";
import Event2 from "../../../assets/images/Events/Event2.png";
import Event3 from "../../../assets/images/Events/Event3.png";
import Event4 from "../../../assets/images/Events/Event4.png";

const LearningCircleV3: React.FC = () => {
  const eventImages = [Event1, Event2, Event3, Event4];

  const upcomingEvents = eventImages.map((image, index) => ({
    image,
    title: `Event ${index + 1}`,
    subtitle: "College of Engineering Trivandrum",
    date: `Jan ${15 + index}`,
    time: "10:00 AM",
    location: "CET Main Hall",
    joinedText: `${5 + index} people you might know have joined`,
  }));

  const allEvents = eventImages.map((image, index) => ({
    image,
    title: `All Event ${index + 1}`,
    subtitle: "College of Engineering Trivandrum",
    joinedText: `${2 + index} people you might know have joined`,
  }));

  return (
    <div className={styles.mainBody}>
      <LearningCircleWithUpcomingMeets events={upcomingEvents} />
      <AllLearningCircles circles={allEvents} />
    </div>
  );
};

export default LearningCircleV3;
