import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Api, QuizResult } from "../../Atom/Atom";
import style from "./Quizz.module.css";

function Quizz() {
  const data = useRecoilValue(Api);
  const setResult = useSetRecoilState(QuizResult);
  // console.log(data);
  const [Question, setQuestion] = useState([data]);
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();

  function handleNext() {
    if (next < 9) {
      setNext(next + 1);
    } else {
      setNext(9);
    }
  }
  function handlePrevious() {
    if (next > 0) {
      setNext(next - 1);
    } else {
      setNext(0);
    }
  }

  function handleCorrectAnswer4() {
    if (next < 9) {
      setNext(next + 1);
      setScore(score + 1);
    } else {
      setNext(9);
      console.log(score, "result score");
      setResult(score);
      navigate("/Result");
    }
  }
  function handleCorrectAnswer3() {
    alert("Your selected answer is wrong");
    if (next < 9) {
      setNext(next + 1);
    } else {
      setNext(9);
      console.log(score, "result score");
      setResult(score);
      navigate("/Result");
    }
  }
  function handleCorrectAnswer2() {
    alert("Your selected answer is wrong");
    if (next < 9) {
      setNext(next + 1);
    } else {
      setNext(9);
      console.log(score, "result score");
      setResult(score);
      navigate("/Result");
    }
  }
  function handleCorrectAnswer1() {
    alert("Your selected answer is wrong");
    if (next < 9) {
      setNext(next + 1);
    } else {
      setNext(9);
      console.log(score, "result score");
      setResult(score);
      navigate("/Result");
    }
  }

  useEffect(() => {
    let time = setInterval(Timer, 1000);
    function Timer() {
      setTimer(timer - 1);
      if (timer === 0) {
        setTimer(15);
        handleNext();
      }
    }
    return () => clearInterval(time);
  });

  return (
    <div className={style.container}>
      <div className={style.score}>
        <h1>Score:{score}</h1>
        {timer}
      </div>

      {Question.map((item) => (
        <div className={style.form}>
          <div className={style.header}>
            {" "}
            <h1>{item.results[next].question}</h1>
          </div>
          <div className={style.option}>
            <div>
              <li onClick={handleCorrectAnswer1}>
                1.{item.results[next].incorrect_answers[0]}
              </li>
              <li onClick={handleCorrectAnswer2}>
                2.{item.results[next].incorrect_answers[1]}
              </li>
            </div>
            <div>
              <li onClick={handleCorrectAnswer3}>
                3.{item.results[next].incorrect_answers[2]}
              </li>
              <li onClick={handleCorrectAnswer4}>
                4.{item.results[next].correct_answer}
              </li>
            </div>
          </div>
          <div className={style.btn}>
            <button className={style.btn1} onClick={handlePrevious}>
              previous
            </button>
            <button className={style.btn2} onClick={handleNext}>
              next
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Quizz;
