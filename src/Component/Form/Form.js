import React, { useEffect, useState } from "react";
import style from "./Form.module.css";
import { Categories } from "../Const/Const";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Atom/Atom";
import { useSetRecoilState } from "recoil";
function Form() {
  const setApi = useSetRecoilState(Api);
  const [option] = useState(Categories);
  const [name, setName] = useState("");
  const [category, setCategory] = useState(0);
  const [difficulty, setDifficulty] = useState("");

  //const [userData, setUserData] = useState(initial);
  const userData = JSON.parse(localStorage.getItem("userData") || "[]");
  const newData = {
    name: name,
    category: category,
    difficulty: difficulty,
  };

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      alert("Please first fill all the required field.");
      return;
    }
    const uri = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(uri);
    const data = await response.json();
    setApi(data?.results);
    userData.unshift(newData);
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/Quizz");
  }
  //console.log(userData,"userNew");
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
            {option.map((item, index) => (
              <option value={item?.value} key={index}>
                {item.category}
              </option>
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
