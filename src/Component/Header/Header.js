import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'
function Header() {
  return (
    <div className={style.header}>
    <Link className={style.head} to="/" > <h1 > Welcome to In Quizz App</h1> </Link>
    </div>
  )
}

export default Header
