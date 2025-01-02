import React, { useEffect, useState, useRef } from "react";
import styles from "./Leaderboard.module.css"; // Importing the CSS Module
import Confetti from 'react-confetti'; // Importing Confetti

// Define types for the state objects
interface User {
  name: string;
  points: number;
}

interface MyRank extends User {
  rank: number;
}

const Leaderboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [rankingData, setRankingData] = useState<User[]>([]);
  const [myRank, setMyRank] = useState<MyRank>({ name: "", points: 0, rank: 0 });
  
  // Create a ref for the champions section to calculate its size
  const championsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = () => {
      const data: User[] = [
        { name: "Edwin Emmanuel Roy", points: 50000 },
        { name: "Anna Hathaway", points: 40000 },
        { name: "Alexa Simpson", points: 30000 },
        { name: "Albert Peter Jose", points: 12000 },
        { name: "John Doe", points: 11000 },
        { name: "Jane Smith", points: 10000 },
        { name: "Michael Johnson", points: 9500 },
        { name: "Emily Davis", points: 9000 },
        { name: "Chris Brown", points: 8500 },
        { name: "Jessica Wilson", points: 8000 },
        { name: "Daniel Garcia", points: 7800 },
        { name: "Sarah Martinez", points: 7600 },
        { name: "David Lee", points: 7400 },
        { name: "Laura Taylor", points: 7200 },
        { name: "James Anderson", points: 7000 },
        { name: "Sophia Thomas", points: 6800 },
        { name: "William Jackson", points: 6600 },
        { name: "Olivia White", points: 6400 },
        { name: "Benjamin Harris", points: 6200 },
        { name: "Isabella Martin", points: 6000 },
      ];

      const myData: User = { name: "You", points: 6000 };

      const updatedData = [myData, ...data];

      const sortedData = updatedData.sort((a, b) => b.points - a.points);

      const myRankIndex = sortedData.findIndex(user => user.name === "You");

      setUsers(sortedData);
      setRankingData(sortedData.slice(0, 3)); // Top 3
      setMyRank({ rank: myRankIndex + 1, ...sortedData[myRankIndex] });
    };

    fetchData();
  }, []);

  const maxPoints = rankingData[0]?.points || 1;

  // Get dimensions of the champions section
  const championsBoxDimensions = championsRef.current
    ? {
        width: championsRef.current.offsetWidth,
        height: championsRef.current.offsetHeight,
      }
    : { width: 0, height: 0 };

  return (
    <div className={styles["leaderboard-container"]}>
    
      {/* Confetti component positioned inside the champions section */}
      <div ref={championsRef} className={styles["champions-section"]}>
        <Confetti
          width={championsBoxDimensions.width}
          height={championsBoxDimensions.height}
          numberOfPieces={500} // You can adjust the number of pieces
        />
        
        <div className={styles["champions-header"]}>
          <h2>CHAMPIONS</h2>
        </div>
        <div className={styles["top-3"]}>
          {rankingData.map((user, index) => (
            <div
              key={index}
              className={`${styles["champion"]} ${styles[`champion-${index + 1}`]} ${index === 0 ? styles["center"] : index === 1 ? styles["left"] : styles["right"]}`}
            >
              <div className={styles["circle-container"]}>
                <img
                  src={`https://via.placeholder.com/50?text=${user.name.charAt(0)}`}
                  alt={user.name}
                  className={styles["champion-avatar"]}
                />
              </div>
              <div className={styles["bar-container"]}>
                <div
                  className={`${styles["bar"]} ${index === 0 ? styles["bar-1"] : index === 1 ? styles["bar-2"] : styles["bar-3"]}`}
                  style={{
                    height: `${(user.points / maxPoints) * 100}%`,
                  }}
                >
                  <span className={styles["bar-points"]}>{user.points ? user.points.toLocaleString() : '0'}</span>
                </div>
              </div>
              <p className={styles["champion-name"]}>{user.name.split(" ")[0]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard Table */}
      <section className={styles["leaderboard-table"]}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Karma Points</th>
            </tr>
          </thead>
          <tbody>
            {/* Your ranking */}
            <tr>
              <td colSpan={3}>Your Rank</td>
            </tr>
            <tr className={styles["user-rank"]}>
              <td>#{myRank.rank}</td>
              <td>{myRank.name}</td>
              <td>{myRank.points ? myRank.points.toLocaleString() : '0'} Points</td>
            </tr>
            <tr>
              <td colSpan={3}>Leader Board</td>
            </tr>
            {/* Other users */}
            {users.map((user, index) =>
              user.name !== "You" ? (
                <tr key={index}>
                  <td>#{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.points ? user.points.toLocaleString() : '0'} Points</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Leaderboard;
