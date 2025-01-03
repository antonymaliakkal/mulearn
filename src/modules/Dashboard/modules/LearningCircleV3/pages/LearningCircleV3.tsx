import React from "react";
import AllLearningCircles from "../components/AllLearningCircles/AllLearningCircles";
import LearningCircleWithUpcomingMeets from "../components/LearningCircleWithUpcomingMeets/LearningCircleWithUpcomingMeets";
import styles from "./LearningCircleV3.module.css";

const LearningCircleV3: React.FC = () => {
    const upcomingEvents = Array.from({ length: 4 }).map((_, index) => ({
        image: "https://via.placeholder.com/400x200",
        title: `Event ${index + 1}`,
        subtitle: "College of Engineering Trivandrum",
        date: `Jan ${15 + index}`,
        time: "10:00 AM",
        location: "CET Main Hall",
        joinedText: `${5 + index} people you might know have joined`
    }));

    const allEvents = Array.from({ length: 4 }).map((_, index) => ({
        image: "https://via.placeholder.com/400x200",
        title: `All Event ${index + 1}`,
        subtitle: "Another Venue",
        joinedText: `${2 + index} people you might know have joined`
    }));

    return (
        <div className={styles.mainBody}>
            <LearningCircleWithUpcomingMeets events={upcomingEvents} />
            <AllLearningCircles circles={allEvents} />
        </div>
    );
};

export default LearningCircleV3;
