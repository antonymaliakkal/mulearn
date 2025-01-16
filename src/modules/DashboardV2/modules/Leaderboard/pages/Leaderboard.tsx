import React, { useEffect, useState, useRef } from "react";
import styles from "./Leaderboard.module.css"; // Importing the CSS Module
import Confetti from "react-confetti"; // Importing Confetti
import ChampionCrown from "../../../assets/svg/ChampionCrown";
import EdwinAvatar from "../../../assets/images/Avatars/Edwin.png";
import AnnaAvatar from "../../../assets/images/Avatars/Anna.png";
import AlexaAvatar from "../../../assets/images/Avatars/Alexa.png";
import { getLeaderboard, getMyRank } from "../service/Leaderboardservice";
import Rank from "../components/Rank";

// Define types for the state objects
interface User {
  full_name: string;
  total_karma: number;
  avatar: string;
  color: string;
}

interface MyRank extends User {
  rank: number;
}

const Leaderboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [rankingData, setRankingData] = useState<User[]>([]);
  const [myRank, setMyRank] = useState<MyRank>({ full_name: "", total_karma: 0, rank: 0 , avatar: '', color: ''});
  const [numberOfPieces, setNumberOfPieces] = useState<number>(500);
  const avatarIndex = [EdwinAvatar,AnnaAvatar,AlexaAvatar];

  // Create a ref for the champions section to calculate its size
  const championsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const fetchData = async () => {
      let data: User[] = [];

      try {
        const response = await getLeaderboard();
        if(response.length > 0){
          data = response;
        }
      } catch (error) {
        console.log(error);
      }

      getMyRank().then((value)=>{
        setMyRank({full_name: "You", total_karma: value.karma, rank: value.rank, avatar: '', color: ''});
      })

      // const myData: User = {
      //   full_name: "You", total_karma: myKarma, avatar: "",
      //   color: ""
      // };

      
      const updatedData = [...data];
      const sortedData = updatedData.sort((a, b) => b.total_karma - a.total_karma);
      const myRankIndex = sortedData.findIndex((user) => user.full_name === "You");

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

  const maxPoints = rankingData[0]?.total_karma || 1;

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
      <Rank></Rank>
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
                <td>{myRank.full_name}</td>
                <td>{myRank.total_karma ? myRank.total_karma.toLocaleString() : "0"} Points</td>
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
                user.full_name !== "You" ? (
                  <tr key={index}>
                    <td className={index < 3 ? styles["top3-rank"] : styles["other-rank"]}>
                      #{index + 1}
                    </td>
                    <td>{user.full_name}</td>
                    <td>{user.total_karma ? user.total_karma.toLocaleString() : "0"} Points</td>
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
