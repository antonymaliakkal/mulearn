import React, { useEffect, useState } from 'react';
import styles from './LC-Create.module.css';
import RecurringDates from '../components/RecurringDates';
import {getInterestGroups} from "../services/LC-CreateService";
import { InterestGroup } from '../types/LC-CreateTypes';

const LcCreate: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    interestGroup: "",
    institute: "",
    location: "",
    description: "",
    recurring: false, // Use a boolean for recurring
  });
  const [interestGroups, setInterestGroups] = useState<InterestGroup[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
  
    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked; // Narrow to HTMLInputElement for checkboxes
      setFormData((values) => ({
        ...values,
        [name]: checked,
      }));
    } else {
      setFormData((values) => ({
        ...values,
        [name]: value,
      }));
    }
  };
  
  useEffect(() => {
    getInterestGroups()
      .then((value) => {
        if (value) {
          setInterestGroups(value.response.aois); // Update the state
          console.log("Fetched interest groups:", value); // Log the fetched data
        }
      })
      .catch((err) => {
        console.log("Error fetching interest groups:", err);
      });
  
    // Cleanup function to reset state
    return () => {
      setInterestGroups([]);
    };
  }, []);
  
  // To monitor interestGroups state updates:
  useEffect(() => {
    console.log("Updated interestGroups:", interestGroups);
  }, [interestGroups]); // Logs whenever interestGroups is updated
  
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.createContainer}>
      <h1 className={styles.sectionTitle}>Enter all details to create a new learning</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="title" className={styles.input_label}>Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter the title of your new learning circle"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
  <label htmlFor="interestGroup" className={styles.input_label}>Interest Group</label>
  <select
    name="interestGroup"
    id="interestGroup"
    value={formData.interestGroup}
    onChange={handleChange}
  >
    <option value="">Select an Interest Group</option>
    {interestGroups.length > 0 && 
      interestGroups.map((value:InterestGroup) => (
        <option key={value?.id} value={value?.id}>
          {value?.name}
        </option>
      ))
    }
  </select>
</div>


        <div className={styles.inputGroup}>
          <label htmlFor="institute" className={styles.input_label}>Institute</label>
          <input
            type="text"
            id="institute"
            placeholder="Enter your institute"
            name="institute"
            value={formData.institute}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="location" className={styles.input_label}>Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter your location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className={`${styles.inputGroup} ${styles.textArea}`}>
          <label htmlFor="description" className={styles.input_label}>Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Tell about what are you going to do with this learning circle"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="recurring" className={styles.input_label}>Is this recurring?</label>
          <label className={styles.switch}>
            <input
              type="checkbox"
              id="recurring"
              name="recurring"
              checked={formData.recurring} // Use checked for checkboxes
              onChange={handleChange}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        {formData.recurring && <RecurringDates />}
        </div>


        <button type="submit" className={styles.submitBtn}>
          Create a learning Circle
        </button>
      </form>
    </div>
  );
};

export default LcCreate;
