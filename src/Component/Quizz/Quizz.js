import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { QuestionsAtom, scoreAtom } from "../../Atom/Atom";
import style from "./Quizz.module.css";

function Quizz() {
  const questions = useRecoilValue(QuestionsAtom);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useRecoilState(scoreAtom);
  const navigate = useNavigate();

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  //checking before destructuring whether question array have some data or not
  if (questions.length === 0) {
    return (
      <div className={style.noQuestions}>
        <h1>No questions found for the quiz!</h1>
        <h2>
          Please register again <Link to="/">Register</Link>.
        </h2>
      </div>
    );
  }

  if (currentQuestion >= questions.length) {
    return navigate("/Result");
  }

  const currentQuestionData = questions[currentQuestion];
 // console.log(currentQuestionData)
  //extracting data from an current question object
  const { question, correct_answer, incorrect_answers } = currentQuestionData;
  //concatenating array of incorrect answers & correct answer
  const allAnswers = [...incorrect_answers, correct_answer];


  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className={style.container}>
      <div className={style.questionStatus}>
        <h3>Question {currentQuestion + 1}/10</h3>
      </div>
      <div className={style.form}>
        <div className={style.header}>
          {" "}
          <h2>
            Q {currentQuestion + 1}: {question}
          </h2>
        </div>
        <div className={style.option}>
          {shuffledAnswers?.map((answer) => (
            <li
              key={answer}
              onClick={() => handleAnswerClick(answer === correct_answer)}
            >
              {answer}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Quizz;
