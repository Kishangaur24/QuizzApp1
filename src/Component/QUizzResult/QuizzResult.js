import React, { useState } from "react";
import style from "./QuizzResult.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { QuizResult, UserRanking } from "../../Atom/Atom";
import { useNavigate } from "react-router-dom";

const QuizzResult = (e) => {
  const setRank = useSetRecoilState(UserRanking);
  const user = JSON.parse(localStorage.getItem("userData"));
  // console.log(user, "user");
  const userResult = useRecoilValue(QuizResult);
  // console.log(userResult, "QuizzResult ....");
  const navigate = useNavigate();
  function handleRestart() {
    navigate("/");
  }
  
  // for getting rank for all user
  function getRank(e){
    e.preventDefault()
    const rankScore=  JSON.parse(localStorage.getItem("userRank") || "[]")
    const newRanker={
      user:user[0].name,
      userResult:userResult
        }
       rankScore.push(newRanker)
      localStorage.setItem("userRank",JSON.stringify(rankScore))

      setRank(rankScore)
      console.log(rankScore)
       navigate("/Rank")

  }
 


  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.Result}>
          <h1>Here You can see Your Result</h1>

          <h2>
            {user[0].name} You Scored:{(userResult / 10) * 100}%
          </h2>

          <div className={style.btn}>
            <button onClick={handleRestart}>Restart Quizz</button>
            <button onClick={getRank}>getRank</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizzResult;
