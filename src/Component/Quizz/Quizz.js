import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import style from './Quizz.module.css';
//import questions from './const'

function Quizz() {


  const id1= useParams()
  console.log(id1)

// const data = questions
// console.log(data)
  const[showFinalResult, setShowFinalResult] = useState(false)
  const [score, setScore]= useState(0)
  const[currentQuestion, setCurrentQuestion]= useState(0)

  // Helper function
  function optionClicked(isCorrect){
  // console.log(isCorrect)
  if(isCorrect){
    setScore(score+1)
  }
  if(currentQuestion+1 < questions.length){
    setCurrentQuestion(currentQuestion+1)
  }else{
    setShowFinalResult(true)
  }
 
  }

  // restart function
  function restartGame(){
    setScore(0)
    setCurrentQuestion(0)
    setShowFinalResult(false)
  }

  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Mumbai", isCorrect: false },
        { id: 1, text: "Kolkata", isCorrect: false },
        { id: 2, text: "Lucknow", isCorrect: false },
        { id: 3, text: "New Delhi", isCorrect: true },
      ],
    },
    {
      text: "who was the first Prime minister of India? ",
      options: [
        { id: 0, text: "Jawahar Lal Nehru", isCorrect: true },
        { id: 1, text: "Lal Bahadur Shastri", isCorrect: false },
        { id: 2, text: "Rajendra Prasad", isCorrect: false },
        { id: 3, text: "Dr bhim rav Ambedkar", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the India?",
      options: [
        { id: 0, text: "SarvePalli RadharKrishnan", isCorrect: true },
        { id: 1, text: "Rajendra prasad", isCorrect: false },
        { id: 2, text: "Ambedkar", isCorrect: false },
        { id: 3, text: "Lal Bahadur Shastri", isCorrect: false },
      ],
    },
    {
      text: "What is react?",
      options: [
        { id: 0, text: "JavaScript frameWork", isCorrect: false },
        { id: 1, text: "JavaScript Library", isCorrect: true },
        { id: 2, text: "Java Library", isCorrect: false },
        { id: 3, text: "Java frameWork", isCorrect: false },
      ],
    },
    {
      text: "Longest River in the world?",
      options: [
        { id: 0, text: "Amazon River", isCorrect: false },
        { id: 1, text: "Nile River", isCorrect: true },
        { id: 2, text: "Yellow River", isCorrect: true },
        { id: 3, text: "Congo River", isCorrect: false },
      ],
    },
  ];

  return (
    <>
    <div className={style.App}>
     <h1>React Quiz</h1>
     <h2>Current Score:{score}</h2>


    {showFinalResult ?(
    
    <div className={style.finalResult}>
    <h1>Final Result</h1>
    <h2>{score} out of {questions.length} correct -({(score/questions.length)*100}%)
     </h2>
     <button className={style.btn} onClick={restartGame}>Restart Game</button>
   </div>
     ) : (
    <div className={style.questionCard}>
    <h2>Question {currentQuestion+1} out of {questions.length}</h2>
  <h3 className={style.question}>{questions[currentQuestion].text}</h3>
  <ul>
  {
    questions[currentQuestion].options.map((option)=>{
      return(
        <li onClick={()=>optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
      )
    })
  }
  </ul>
  </div>

   ) }

   
   
    </div>
    </>
  );
}

export default Quizz;
