import React, { useEffect, useState } from "react";
import style from "./RankPage.module.css";
import { useRecoilValue } from "recoil";
import { UserRanking } from "../../Atom/Atom";
import { Link } from "react-router-dom";

const RankPage = () => {
  const rank = useRecoilValue(UserRanking);
  const [sortedRank, setSortedRank] = useState([]);

  useEffect(() => {
    const rankClone = JSON.parse(JSON.stringify(rank));
    const data = rankClone.sort((a, b) => {
      return b.userResult - a.userResult;
    });
    setSortedRank(data);
  }, [rank]);

  return (
    <div className={style.main}>
      <h1>LeaderBoard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedRank.map((item) => (
            <tr>
              <td>{item.user}</td>
              <td>{item.userResult}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>
        <Link to="/" style={{ color: "white" }}>
          Go to Home
        </Link>
      </h3>
    </div>
  );
};

export default RankPage;
