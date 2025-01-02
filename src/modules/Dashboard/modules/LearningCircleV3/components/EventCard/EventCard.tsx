import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from '../../../../../../components/MuComponents/MuCard/Card'; 
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './EventCard.module.css'; 

interface EventCardProps {
  image: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  joinedText: string;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  subtitle,
  date,
  time,
  location,
  joinedText,
}) => {
  return (
    <Card className="custom-card" style={{ marginTop: '20px', maxWidth: '400px' }}>
      <CardHeader>
        <img src={image} alt={title} className={styles.cardImage} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={styles.infoRow}>
          <FaCalendarAlt className={styles.icon} />
          <span>{date}</span>
        </div>
        <div className={styles.infoRow}>
          <FaClock className={styles.icon} />
          <span>{time}</span>
        </div>
        <div className={styles.infoRow}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter className={styles.cardFooter}>
        <button className={styles.joinButton}>Join Now</button>
        <p className={styles.joinedText}>{joinedText}</p>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
