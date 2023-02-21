import React, { useState } from 'react'
import style from "./Form.module.css"
import {Categories} from "../Const/Const"
import { useNavigate } from 'react-router-dom'

function Form() {
    const [option , setOption] = useState(Categories)
    const navigate = useNavigate()
    function handleClick(){
      navigate("/Quizz")
    }
  return (
    <form className={style.form}>
      <h1>Quizz setting</h1>
      <input className={style.input} placeholder='Enter your name'/>
      <div>

      <select className={style.select}>
       {option.map((item , index)=>
       <>
       <option key={index}>
        {item.category}
       </option>
       </>
       )}
      </select>
      </div>


      <div>
      <select className={style.select}>
       <option >Deficulty</option>
       <option>Easy</option>
       <option>Medium</option>
       <option>Hard</option>
      </select>
      </div>
    <button onClick={handleClick} className={style.btn}>Start Quizz</button>
      
    </form>
  )
}

export default Form
