import React from "react";
import style from "./QuizzResult.module.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { scoreAtom, UserRanking } from "../../Atom/Atom";
import { useNavigate } from "react-router-dom";

const QuizzResult = (e) => {
  const setRank = useSetRecoilState(UserRanking);
  const user = JSON.parse(localStorage.getItem("userData"));
  const [score, setScore] = useRecoilState(scoreAtom);
  const navigate = useNavigate();
  function handleRestart() {
    navigate("/");
  }

  // for getting rank for all user
  function getRank(e) {
    e.preventDefault();
    const rankScore = JSON.parse(localStorage.getItem("userRank") || "[]");
    const newRanker = {
      user: user[0].name,
      userResult: score,
    };
    rankScore.push(newRanker);
    localStorage.setItem("userRank", JSON.stringify(rankScore));

    setRank(rankScore);
    setScore(0);
    navigate("/Rank");
  }

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.Result}>
          <h1>Here You can see Your Result</h1>

          <h2>
            {user[0].name} You Scored:{(score / 10) * 100}%
          </h2>

          <div className={style.btn}>
            <button onClick={handleRestart}>Restart Quizz</button>
            <button onClick={getRank}>See Your Rank</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizzResult;
