import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Api, QuizResult } from "../../Atom/Atom";
import style from "./Quizz.module.css";

function Quizz() {
  const navigate=useNavigate()
  const data = useRecoilValue(Api);
  const setResult = useSetRecoilState(QuizResult);
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
   const [timer, setTimer] = useState(15);

  function handleCorrectAnswer(){
    if(next<9){
      setNext(next+1)
      setScore(score+1)
      setResult(score) 
    }else{
      setNext(9)
      setScore(score+1)
      setResult(score+1)
      navigate("/Result")
    }
    
  }
  
 function handleWrong(){
  if(next<9){
    setNext(next+1)
  }else{
    setNext(9)
    navigate("/Result")
  }
  
 }

 function handleNext(){
   if(next<9){
    setNext(next+1)
   }else{
    setNext(9)
   }
 }
 function handlePrevious(){
   if(next>0){
    setNext(next-1)
   }else{
    setNext(0)
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
      </div>
      <div className={style.timer}>
        <h1>{timer} </h1>
      </div>
      <div className={style.form}>
        <div className={style.header}>
          <h1>Question: {next+1} {data[next]?.question}</h1>
        </div>
        <div className={style.option}>
          
            <div className={style.allOption}>
         <li onClick={handleWrong}>{data[next].incorrect_answers[0]}</li>
         <li onClick={handleWrong}>{data[next].incorrect_answers[1]}</li>
         </div>
         <div>
         <li onClick={handleWrong}>{data[next].incorrect_answers[2]}</li>
         <li onClick={handleCorrectAnswer}>{data[next]?.correct_answer}</li>
         </div>
          
        </div>

        <div className={style.btn}>
            <button className={style.btn1} onClick={handlePrevious} >
              previous
            </button>
        

            <button className={style.btn2} onClick={handleNext}>
              next
            </button>
       
        </div>
      </div>
    </div>
  );
}
export default Quizz;
