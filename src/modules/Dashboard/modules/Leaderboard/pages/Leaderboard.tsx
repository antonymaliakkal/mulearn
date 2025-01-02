import React, { useEffect, useState } from "react";
import styles from "./Leaderboard.module.css"; // Importing the CSS Module

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

  useEffect(() => {
    const fetchData = () => {
      const data: User[] = [
        { name: "Edwin Emmanuel Roy", points: 50000 }, // 1st
        { name: "Anna Hathaway", points: 40000 },      // 2nd
        { name: "Alexa Simpson", points: 30000 },      // 3rd
        { name: "Albert Peter Jose", points: 12000 },  // 4th
        { name: "John Doe", points: 11000 },           // 5th
        { name: "Jane Smith", points: 10000 },         // 6th
        { name: "Michael Johnson", points: 9500 },     // 7th
        { name: "Emily Davis", points: 9000 },         // 8th
        { name: "Chris Brown", points: 8500 },         // 9th
        { name: "Jessica Wilson", points: 8000 },      // 10th
        { name: "Daniel Garcia", points: 7800 },       // 11th
        { name: "Sarah Martinez", points: 7600 },      // 12th
        { name: "David Lee", points: 7400 },           // 13th
        { name: "Laura Taylor", points: 7200 },        // 14th
        { name: "James Anderson", points: 7000 },      // 15th
        { name: "Sophia Thomas", points: 6800 },       // 16th
        { name: "William Jackson", points: 6600 },     // 17th
        { name: "Olivia White", points: 6400 },        // 18th
        { name: "Benjamin Harris", points: 6200 },     // 19th
        { name: "Isabella Martin", points: 6000 },     // 20th
      ];

      const myData: User = { name: "You", points: 6000 }; // Example: "You" with higher points

      // Add "myData" to the data array
      const updatedData = [myData, ...data];

      // Sort the data by points in descending order
      const sortedData = updatedData.sort((a, b) => b.points - a.points);

      // Find your rank
      const myRankIndex = sortedData.findIndex(user => user.name === "You");

      setUsers(sortedData);
      setRankingData(sortedData.slice(0, 3)); // Top 3
      setMyRank({ rank: myRankIndex + 1, ...sortedData[myRankIndex] });
    };

    fetchData();
  }, []);

  const maxPoints = rankingData[0]?.points || 1; // Prevent division by zero

  return (
    <div className={styles["leaderboard-container"]}>
      {/* Header Section */}
      <header className={styles["leaderboard-header"]}>
        <h1>Leaderboard</h1>
        <div className={styles["search-bar"]}>
          <input type="text" placeholder="Search for skills, jobs, locations, colleges" />
        </div>
      </header>

      {/* Champions Section */}
      <section className={styles["champions-section"]}>
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
      </section>

      {/* Leaderboard Table */}
      <section className={styles["leaderboard-table"]}>
        <h3>Your Rank</h3>
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
            <tr className={styles["user-rank"]}>
              <td>#{myRank.rank}</td>
              <td>{myRank.name}</td>
              <td>{myRank.points ? myRank.points.toLocaleString() : '0'} Points</td>
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
