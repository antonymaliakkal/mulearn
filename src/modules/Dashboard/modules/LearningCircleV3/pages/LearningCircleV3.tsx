import React from "react";
import EventCard from "../components/EventCard/EventCard";

const LearningCircleV3: React.FC = () => {
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
    flexWrap: "wrap",
    gap: "24px",
    boxSizing: "border-box",
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

  const horizontalScrollStyle: React.CSSProperties = {
    width: "1042px",
    display: "flex",
    flexWrap: "nowrap",
    gap: "24px",
    overflowX: "auto",
    paddingBottom: "10px", // Optional: Adds space to prevent cards from cutting off
    scrollbarWidth: "none", // Hides scrollbar for Firefox
    msOverflowStyle: "none", // Hides scrollbar for IE
  };

  const hideScrollbarStyle: React.CSSProperties = {
    overflow: "hidden",
  };

  return (
    <div style={mainBodyStyle}>
      {/* Section 1: Learning Circles with Upcoming Meets */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Learning Circles with Upcoming Meets</h2>
        <div style={{ ...horizontalScrollStyle, ...hideScrollbarStyle }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <EventCard
              key={`upcoming-${index}`}
              image="https://via.placeholder.com/400x200"
              title={`Event ${index + 1}`}
              subtitle="College of Engineering Trivandrum"
              date={`January ${15 + index}, 2025`}
              time="10:00 AM - 12:00 PM"
              location="CET Main Hall"
              joinedText={`${5 + index} people you might know have joined`}
            />
          ))}
        </div>
      </div>

      {/* Section 2: All Learning Circles */}
    </div>
  );
};

export default LearningCircleV3;
