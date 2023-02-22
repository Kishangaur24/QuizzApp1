import React, { useState } from "react";
import style from "./Form.module.css";
import { Categories } from "../Const/Const";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Atom/Atom";
import { useSetRecoilState } from "recoil";
function Form() {
   const setApi=useSetRecoilState(Api)
  const [option, setOption] = useState(Categories);
  const [name, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState("");

   const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault()
    
    const response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    const data = await response.json();
    setApi(data)
    navigate("/Quizz");
    console.log(data);
  }
  

  return (
    <div className={style.main}>
    <form className={style.form}>
      <h1>Quizz setting</h1>
      <input
        required
        className={style.input}
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <select
          className={style.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {option.map((item) => (
            <>
              <option value={item?.value} key={item.value}>{item.category}</option>
            </>
          ))}
        </select>
      </div>

      <div>
        <select
          className={style.select}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Deficulty</option>
          <option>easy</option>
          <option>medium</option>
          <option>hard</option>
        </select>
      </div>
      <button onClick={handleSubmit} className={style.btn}>
        Start Quizz
      </button>
    </form>
    </div>
  );
}

export default Form;
