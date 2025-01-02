import React from 'react';
import EventCard from '../components/EventCard/EventCard';

const LearningCircleV3: React.FC = () => {
  return (
    <div>
      <EventCard
        image="https://via.placeholder.com/400x200"
        title="Digital Marketing Workshop"
        subtitle="College of Engineering Trivandrum"
        date="January 15, 2025"
        time="10:00 AM - 12:00 PM"
        location="CET Main Hall"
        joinedText="5 people you might know have joined"
      />
    </div>
  );
};

export default LearningCircleV3;
