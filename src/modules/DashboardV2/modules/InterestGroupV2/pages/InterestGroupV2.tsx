import React, { useEffect, useState } from 'react';
import styles from './InterestGroupV2.module.css';
import InterestItem from '../components/InterestItem';
import { getInterestGroup } from '../service/InterestGroupService';

import webdev from '../assets/webdev.png'; // Placeholder image

const GridPage: React.FC = () => {
  // State for dynamic interest groups
  const [interestGroups, setInterestGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch interest groups on component mount
  useEffect(() => {
    const fetchInterestGroups = async () => {
      try {
        const data = await getInterestGroup();
        setInterestGroups(data.response.aois); // Extract the aois array
        setLoading(false);
      } catch (err) {
        setError('Failed to load interest groups');
        setLoading(false);
      }
    };

    fetchInterestGroups();
  }, []);

  // Loading state
  if (loading) {
    return <p className={styles.loading}>Loading interest groups...</p>;
  }

  // Error state
  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  // Render the interest groups
  return (
    <div className={styles.outerContainer}>
      <h2 className={styles.gridTitle}>Software</h2>
      <div className={styles.gridContainer}>
        {interestGroups.map((group) => (
          <InterestItem
            key={group.id}
            imageUrl={webdev} // Using webdev.png as the placeholder image
            name={group.name}
          />
        ))}
      </div>
    </div>
  );
};

export default GridPage;
