import React, { useState, useEffect } from 'react';
import OpportunityCard from './components/OpportunityCard';
import styles from './Opportunity.module.css';
import { getOpportunites } from '../service/OpportunityService';
import { JobListing } from '../types/JobListing'; // Import the JobListing type

const Opportunity: React.FC = () => {
  const [opportunities, setOpportunities] = useState<JobListing[]>([]); // Use the correct type

  useEffect(() => {
    // Define an async function inside useEffect to fetch data
    const fetchOpportunities = async () => {
      try {
        const response = await getOpportunites();
        setOpportunities(response);
      } catch (error) {
        console.error('Error fetching opportunities:', error);
      }
    };

    fetchOpportunities();
  }, []); // Empty dependency array means it runs once when the component mounts

  if (opportunities.length === 0) {
    return <div>Loading...</div>; // Optionally, show a loading indicator
  }

  return (
    <div className={styles.mainDiv}>
      {opportunities.map((value, index) => (
        <OpportunityCard
          key={index}
          title={value.title}
          company={value.organization} // Make sure 'company' matches the field in the object
          description={value.role} // Use 'role' as description for example, or whatever is appropriate
          jobType={value.duration} // Assuming duration is the job type (e.g., Full-time, Part-time)
          location={value.location}
          link={value.applylink} // Assuming applylink is the link for each job
        />
      ))}
    </div>
  );
};

export default Opportunity;
