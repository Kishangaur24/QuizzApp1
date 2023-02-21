import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Card.module.css";
const Card = () => {
  const navigate = useNavigate();

  const card = [
    {
      id: 1,
      name: "React Quizz",
      icon: "",
    },

    {
      id: 2,
      name: "GK Quizz",
      icon: "",
    },

    {
      id: 3,
      name: "React Quizz",
      icon: "",
    },

    {
      id: 4,
      name: "React Quizz",
      icon: "",
    },
    {
      id: 5,
      name: "React Quizz",
      icon: "",
    },
    {
      id: 6,
      name: "React Quizz",
      icon: "",
    },
    {
      id: 7,
      name: "React Quizz",
      icon: "",
    },
    {
      id: 8,
      name: "React Quizz",
      icon: "",
    },
  ];

  // function handleCard(id){
  //   navigate("/Quizz")
  // }

  return (
    <div className={style.card}>
      {card.map((element) => {
        return (
          <Link to={`/Quizz/${element.id}`}>
            <div key={element.id} className={style.cardDiv}>
              {element.name}
              {element.id}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
