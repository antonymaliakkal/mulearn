import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import styles from './OpportunityCard.module.css';
import googleImage from "../assets/google.png";

interface Props {
  // Define your props types here
    title : string;
    company: string;
    description : string;
    link: string;
    location: string;
    jobType: string;
}

const OpportunityCard: React.FC<Props> = ({title,company,description,link,location,jobType}) => {

  return (
    <div className={styles.card}>
        <div className={styles.title}>
            <img src={googleImage} />
            <div className={styles.title_text}>
                <h1>{title}</h1>
                <h2>{company}</h2>
            </div>
        </div>
        <p>{description}</p>
        <div className={styles.bottom_row}>
            <div className={styles.left}>
                <div className={styles.location}>
                    <CiLocationOn/>
                    <span>{location}</span>
                </div>
                <div className={styles.jobType}>
                    <FaRegClock/>
                    <span>{jobType}</span>
                </div>
            </div>
            <div className={styles.right}>
                <button><a href={link}>Apply</a></button>
            </div>
        </div>
    </div>
  );
};

export default OpportunityCard;
