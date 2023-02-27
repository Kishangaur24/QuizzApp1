import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Api, QuizResult } from "../../Atom/Atom";
import style from "./Quizz.module.css";

function Quizz() {
  const navigate=useNavigate()
  // Going to infinitive loop
  const data = useRecoilValue(Api);
  const [quizzes, setQuizzes] = useState([]);
  const [correctAns, setCorrectAns] = useState("");
  const setResult = useSetRecoilState(QuizResult);
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
   const [timer, setTimer] = useState(15);

  console.log(score);

  //Using the Fisher-Yates algorithm
  function shuffleArray(array) {
    console.log(array)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    if (data?.length) {
      const correct_answer = data[next]?.correct_answer;
      setCorrectAns(correct_answer);
      const incorrect_answers = data[next]?.incorrect_answers;
      const allAnswers = [correct_answer, ...incorrect_answers];
      const shuffledAnswers = shuffleArray(allAnswers);
      setQuizzes(shuffledAnswers);
    }
  }, [data, next]);

  function handleNext() {
    if (next < 9) {
      setNext((prev) => prev + 1);
    }else if(next===9){
      navigate("/Result")
    }
  }

  function handlePrevious() {
    if (next > 0) {
      setNext((prev) => prev - 1);
    }
  }

  function handleQuiz(ans, correctAns) {
    if (correctAns === ans) {
      setResult(score)
      setScore((prev) => prev + 1);
      
    }
  }

  useEffect(() => {
    let time = setInterval(Timer, 1000);
    function Timer() {
      setTimer(timer - 1);
      if (timer === 0) {
        setTimer(15);
        handleNext();
      }else if(next===9){
        navigate("/Result")
      }
    }
    return () => clearInterval(time);
  });

  return (
    <div className={style.container}>
      <div className={style.score}>
        <h1>Score:{score}</h1>
      </div>
      <div className={style.timer}>
        <h1>{timer} </h1>
      </div>
      <div className={style.form}>
        <div className={style.header}>
          {" "}
          <h1>Question{next+1} {data[next]?.question}</h1>
          Correct ans - {correctAns}
        </div>
        <div className={style.option}>
          {quizzes?.map((answer) => (
            <li key={answer} onClick={() => handleQuiz(answer, correctAns)}>
              {answer}
            </li>
          ))}
        </div>

        <div className={style.btn}>
          {next > 0 ? (
            <button className={style.btn1} onClick={handlePrevious}>
              previous
            </button>
          ) : null}

          {next < 9 ? (
            <button className={style.btn2} onClick={handleNext}>
              next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Quizz;