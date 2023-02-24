import React from "react";
import style from "./QuizzResult.module.css";
import { useRecoilValue } from "recoil";
import { QuizResult } from "../../Atom/Atom";
import { useNavigate } from "react-router-dom";

const QuizzResult = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log(user, "user");
  const userResult = useRecoilValue(QuizResult);
  console.log(userResult, "QuizzResult ....");
  const navigate = useNavigate();
  function handleRestart() {
    navigate("/");
  }

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.Result}>
          <h1>Here You can see Your Result</h1>

          <h2>
            {user[0].name} Your Score:{(userResult/10)*100}%
          </h2>

          <div className={style.btn}>
            <button onClick={handleRestart}>Restart Quizz</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizzResult;
