import React from "react";
import EventCard from "../EventCard/EventCard";
import styles from "./LearningCircleWithUpcomingMeets.module.css";

interface LearningCircleWithUpcomingMeetsProps {
    events: Array<{
        image: string;
        title: string;
        subtitle: string;
        date: string;
        time: string;
        location: string;
        joinedText: string;
    }>;
}

const LearningCircleWithUpcomingMeets: React.FC<
    LearningCircleWithUpcomingMeetsProps
> = ({ events }) => {
    return (
        <div className={styles.section}>
            <h2 className={styles.sectionHeader}>
                Learning Circles with Upcoming Meets
            </h2>
            <div className={styles.cardContainer}>
                {events.map((event, index) => (
                    <div key={index} className={styles.card}>
                        <EventCard
                            image={event.image}
                            title={event.title}
                            subtitle={event.subtitle}
                            date={event.date}
                            time={event.time}
                            location={event.location}
                            joinedText={event.joinedText}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearningCircleWithUpcomingMeets;
