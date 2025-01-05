import React, { useEffect, useState } from 'react';
import { Crown } from 'lucide-react';
import styles from './Leaderboard.module.css';
import Edwin from '../../../../../../DashboardV2/assets/images/Avatars/Edwin.png';
import Anna from '../../../../../../DashboardV2/assets/images/Avatars/Anna.png';
import Alexa from '../../../../../../DashboardV2/assets/images/Avatars/Alexa.png';
import { fetchLeaderBoard } from '../../../service/ProfileService';

interface Top3Entry {
  name: string;
  points: string;
  position: number;
  height: number;
  src: string;
  institution: string;
}

const avatarImages = [Edwin, Anna, Alexa];

export default function Leaderboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [top3, setTop3] = useState<Top3Entry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const gatherLeaderboard = async () => {
      setIsLoading(true);
      try {
        const leaderBoardData = await fetchLeaderBoard();
        const top3Data: Top3Entry[] = leaderBoardData.response
          .slice(0, 3)
          .map((user: { total_karma: number; full_name: string; institution: string }, index: number) => {
            const maxKarma = Math.max(
              ...leaderBoardData.response.slice(0, 3).map((u: { total_karma: number }) => u.total_karma)
            );
            const height = (user.total_karma / maxKarma) * 150;

            return {
              name: user.full_name.trim() || `User ${index + 1}`,
              points: (user.total_karma / 1000).toFixed(1),
              position: index + 1,
              height,
              src: avatarImages[index],
              institution: user.institution,
            };
          });
        setTop3(top3Data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch leader board data';
        setError(errorMessage);
        console.error('Failed to fetch leader board info:', err);
      } finally {
        setIsLoading(false);
      }
    };

    gatherLeaderboard();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading leaderboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>Leaderboard</h3>
        <button className={styles.viewAllButton}>View All</button>
      </div>
      <div className={styles.gradientBg}>
        <div className={styles.entriesWrapper}>
          {top3?.map((entry) => (
            <div key={entry.name} className={styles.entry}>
              {entry.position === 1 && <Crown className={styles.crownIcon} />}
              <div
                className={styles.avatar}
                style={{
                  backgroundColor:
                    entry.position === 1
                      ? '#CCC1F0'
                      : entry.position === 2
                      ? '#B4E5BC'
                      : '#F3ABA7',
                }}
              >
                <img
                  className={styles[`avatar${entry.position}`]}
                  src={entry.src}
                  alt={entry.name.charAt(0)}
                />
              </div>
              <p className={styles.name}>{entry.name}</p>
              <p className={styles.points}>{entry.points}</p>
              <div
                className={styles.bar}
                style={{ height: `${entry.height}px` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
