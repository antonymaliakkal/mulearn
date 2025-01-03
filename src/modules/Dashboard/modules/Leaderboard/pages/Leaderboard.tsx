import React, { useEffect, useState, useRef } from "react";
import styles from "./Leaderboard.module.css"; // Importing the CSS Module
import Confetti from "react-confetti"; // Importing Confetti
import ChampionCrown from "../../../assets/svg/ChampionCrown";
import EdwinAvatar from "../../../assets/images/Avatars/Edwin.png";
import AnnaAvatar from "../../../assets/images/Avatars/Anna.png";
import AlexaAvatar from "../../../assets/images/Avatars/Alexa.png";

// Define types for the state objects
interface User {
  name: string;
  points: number;
  avatar: string;
}

interface MyRank extends User {
  rank: number;
}

const Leaderboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [rankingData, setRankingData] = useState<User[]>([]);
  const [myRank, setMyRank] = useState<MyRank>({ name: "", points: 0, rank: 0 });
  const [numberOfPieces, setNumberOfPieces] = useState<number>(500);

  // Create a ref for the champions section to calculate its size
  const championsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = () => {
      const data: User[] = [
        { name: "Edwin Emmanuel Roy", points: 50000, avatar: EdwinAvatar },
        { name: "Anna Hathaway", points: 40000, avatar: AnnaAvatar },
        { name: "Alexa Simpson", points: 30000, avatar: AlexaAvatar },
        { name: "Albert Peter Jose", points: 12000, avatar: "" },
        { name: "John Doe", points: 11000, avatar: "" },
        { name: "Jane Smith", points: 10000, avatar: "" },
        { name: "Michael Johnson", points: 9500, avatar: "" },
        { name: "Emily Davis", points: 9000, avatar: "" },
        { name: "Chris Brown", points: 8500, avatar: "" },
        { name: "Jessica Wilson", points: 8000, avatar: "" },
        { name: "Daniel Garcia", points: 7800, avatar: "" },
        { name: "Sarah Martinez", points: 7600, avatar: "" },
        { name: "David Lee", points: 7400, avatar: "" },
        { name: "Laura Taylor", points: 7200, avatar: "" },
        { name: "James Anderson", points: 7000, avatar: "" },
        { name: "Sophia Thomas", points: 6800, avatar: "" },
        { name: "William Jackson", points: 6600, avatar: "" },
        { name: "Olivia White", points: 6400, avatar: "" },
        { name: "Benjamin Harris", points: 6200, avatar: "" },
        { name: "Isabella Martin", points: 6000, avatar: "" },
      ];

      const myData: User = { name: "You", points: 6000, avatar: "" };

      const updatedData = [myData, ...data];
      const sortedData = updatedData.sort((a, b) => b.points - a.points);
      const myRankIndex = sortedData.findIndex((user) => user.name === "You");

      setUsers(sortedData);
      setRankingData(sortedData.slice(0, 3)); // Top 3
      setMyRank({ rank: myRankIndex + 1, ...sortedData[myRankIndex] });
    };

    fetchData();

    // Gradually reduce the number of confetti pieces after 3 seconds
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setNumberOfPieces((prev) => {
          if (prev <= 0) {
            clearInterval(interval); // Stop when pieces are reduced to zero
            return 0;
          }
          return prev - 50; // Reduce by 50 pieces per step
        });
      }, 100); // Adjust interval duration for smooth reduction
    }, 3000); // Start reduction after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
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
          numberOfPieces={numberOfPieces} // Dynamically control number of pieces
          tweenDuration={5000}
        />
        <div className={styles["champions-header"]}>
          <h2>CHAMPIONS</h2>
        </div>
        <div className={styles["top-3"]}>
          {rankingData.map((user, index) => (
            <div
              key={index}
              className={`${styles["champion"]} ${styles[`champion-${index + 1}`]} ${
                index === 0 ? styles["center"] : index === 1 ? styles["left"] : styles["right"]
              }`}
            >
              <div className={styles["bar-container"]}>
                <div
                  className={`${styles["bar"]} ${
                    index === 0 ? styles["bar-1"] : index === 1 ? styles["bar-2"] : styles["bar-3"]
                  }`}
                  style={{
                    height: `${(user.points / maxPoints) * 100}%`,
                  }}
                >
                  <div className={styles["bar-info"]}>
                    <div className={styles["crown"]}>{index === 0 ? <ChampionCrown /> : ""}</div>
                    <div className={styles["circle-container"]}>
                      <img
                        src={`${user.avatar}`}
                        alt={user.name}
                        className={styles["champion-avatar"]}
                        onError={(event) => {
                          (event.target as HTMLImageElement).src = `https://via.placeholder.com/50?text=${user.name.charAt(
                            0
                          )}`; // Set a placeholder if avatar fails to load
                        }}
                      />
                    </div>
                    <p className={styles["champion-name"]}>{user.name.split(" ")[0]}</p>
                  </div>
                  <span className={styles["bar-points"]}>
                    {user.points ? user.points.toLocaleString() : "0"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Leaderboard Table */}
      <section className={styles["leaderboard-table"]}>
        <div className={styles["table-wrapper"]}>
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
                <td></td>
              </tr>
              <tr>
                <td className={styles["table-subtitle"]} colSpan={3}>
                  Your Rank
                </td>
              </tr>
              <tr className={styles["user-rank"]}>
                <td className={styles["other-rank"]}>#{myRank.rank}</td>
                <td>{myRank.name}</td>
                <td>{myRank.points ? myRank.points.toLocaleString() : "0"} Points</td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td className={styles["table-subtitle"]} colSpan={3}>
                  Leader Board
                </td>
              </tr>
              {/* Other users */}
              {users.map((user, index) =>
                user.name !== "You" ? (
                  <tr key={index}>
                    <td className={index < 3 ? styles["top3-rank"] : styles["other-rank"]}>
                      #{index + 1}
                    </td>
                    <td>{user.name}</td>
                    <td>{user.points ? user.points.toLocaleString() : "0"} Points</td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
