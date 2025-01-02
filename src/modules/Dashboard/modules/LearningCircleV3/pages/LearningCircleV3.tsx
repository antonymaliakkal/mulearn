import React, { useState, useRef, useEffect } from "react";
import EventCard from "../components/EventCard/EventCard";

const LearningCircleV3: React.FC = () => {
  const [upcomingCards, setUpcomingCards] = useState(
    Array.from({ length: 5 }, (_, index) => ({
      id: index,
      image: "https://via.placeholder.com/400x200",
      title: `Event ${index + 1}`,
      subtitle: "College of Engineering Trivandrum",
      date: `January ${15 + index}, 2025`,
      time: "10:00 AM - 12:00 PM",
      location: "CET Main Hall",
      joinedText: `${5 + index} people you might know have joined`,
    }))
  );

  const mainBodyStyle: React.CSSProperties = {
    width: "1121px",
    minHeight: "1347px",
    borderRadius: "16px 16px 16px 16px",
    border: "0.5px solid #787878",
    backgroundColor: "#FFFFFF",
    margin: "0 auto",
    padding: "35px 39px",
    boxSizing: "border-box",
    overflow: "hidden",
  };

  const sectionStyle: React.CSSProperties = {
    width: "1042px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "21px",
    marginBottom: "35px",
  };

  const sectionBodyStyle: React.CSSProperties = {
    width: "1042px",
    display: "flex",
    flexWrap: "nowrap",
    gap: "24px",
    overflowX: "auto",
    paddingBottom: "10px",
  };

  const headerStyle: React.CSSProperties = {
    width: "1042px",
    height: "25px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "25.2px",
    color: "#000000",
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    if (
      container.scrollLeft + container.offsetWidth >=
      container.scrollWidth - 10
    ) {
      // Load more cards when nearing the end of the scroll
      setUpcomingCards((prevCards) => [
        ...prevCards,
        ...Array.from({ length: 3 }, (_, index) => ({
          id: prevCards.length + index,
          image: "https://via.placeholder.com/400x200",
          title: `Event ${prevCards.length + index + 1}`,
          subtitle: "College of Engineering Trivandrum",
          date: `January ${15 + prevCards.length + index}, 2025`,
          time: "10:00 AM - 12:00 PM",
          location: "CET Main Hall",
          joinedText: `${5 + prevCards.length + index} people you might know have joined`,
        })),
      ]);
    }
  };

  return (
    <div style={mainBodyStyle}>
      {/* Section 1: Learning Circles with Upcoming Meets */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Learning Circles with Upcoming Meets</h2>
        <div style={sectionBodyStyle} onScroll={handleScroll}>
          {upcomingCards.map((card) => (
            <EventCard
              key={card.id}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              date={card.date}
              time={card.time}
              location={card.location}
              joinedText={card.joinedText}
            />
          ))}
        </div>
      </div>

      {/* Section 2: All Learning Circles */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>All Learning Circles</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {Array.from({ length: 7 }).map((_, index) => (
            <EventCard
              key={`all-${index}`}
              image="https://via.placeholder.com/400x200"
              title={`All Circles Event ${index + 1}`}
              subtitle="College of Engineering Trivandrum"
              date={`February ${1 + index}, 2025`}
              time="10:00 AM - 12:00 PM"
              location={`Location ${index + 1}`}
              joinedText={`${5 + index} people you might know have joined`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningCircleV3;
