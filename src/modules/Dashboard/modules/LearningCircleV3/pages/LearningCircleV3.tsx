import React from 'react';
import EventCard from '../components/EventCard/EventCard';

const LearningCircleV3: React.FC = () => {
  return (
    <div>
      <EventCard
        image="https://via.placeholder.com/400x200"
        title="Digital Marketing Workshop"
        subtitle="College of Engineering Trivandrum Sreekaryam, Trivandrum"
        date="Jan 15"
        time="10:00 AM"
        location="CET Main Hall"
        joinedText="5 people you might know have joined"
      />
    </div>
  );
};

export default LearningCircleV3;
