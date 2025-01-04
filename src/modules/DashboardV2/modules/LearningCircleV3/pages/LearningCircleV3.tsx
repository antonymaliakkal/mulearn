import React, { useEffect, useState } from "react";
import AllLearningCircles from "../components/AllLearningCircles/AllLearningCircles";
import LearningCircleWithUpcomingMeets from "../components/LearningCircleWithUpcomingMeets/LearningCircleWithUpcomingMeets";
import { getLearningCircles } from "../service/LearningCircleService";
import styles from "./LearningCircleV3.module.css";

interface Event {
    image: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    location: string;
    joinedText: string;
}

interface Circle {
    image: string;
    title: string;
    subtitle: string;
    joinedText: string;
}

const LearningCircleV3: React.FC = () => {
    const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
    const [allCircles, setAllCircles] = useState<Circle[]>([]);

    useEffect(() => {
        const fetchLearningCircles = async () => {
            try {
                const response = await getLearningCircles();

                if (
                    response &&
                    response.hasError === false &&
                    response.response
                ) {
                    const events: Event[] = response.response
                        .filter(
                            circle =>
                                circle.next_meetup &&
                                circle.next_meetup.is_scheduled
                        )
                        .map(circle => ({
                            image: "path/to/default/image.png", // Replace with a valid image or logic to determine the image
                            title: circle.next_meetup.title || "Untitled Event",
                            subtitle: circle.ig || "No Interest Group",
                            date: new Date(
                                circle.next_meetup.meet_time
                            ).toLocaleDateString(),
                            time: new Date(
                                circle.next_meetup.meet_time
                            ).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            }),
                            location:
                                circle.next_meetup.meet_place ||
                                "No Location Specified",
                            joinedText: `${
                                circle.recurrence || 0
                            } people you might know have joined`
                        }));

                    const circles: Circle[] = response.response.map(circle => ({
                        image: "path/to/default/image.png", // Replace with a valid image or logic to determine the image
                        title: circle.ig || "Unnamed Circle",
                        subtitle: circle.org || "No Organization Specified",
                        joinedText: `${
                            circle.recurrence || 0
                        } people you might know have joined`
                    }));

                    setUpcomingEvents(events);
                    setAllCircles(circles);
                }
            } catch (error) {
                console.error("Error fetching learning circles:", error);
            }
        };

        fetchLearningCircles();
    }, []);

    return (
        <div className={styles.mainBody}>
            <LearningCircleWithUpcomingMeets events={upcomingEvents} />
            <AllLearningCircles circles={allCircles} />
        </div>
    );
};

export default LearningCircleV3;
