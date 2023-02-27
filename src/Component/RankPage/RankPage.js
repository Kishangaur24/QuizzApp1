import React, { useEffect, useState } from 'react'
import style from './RankPage.module.css'
import {  useRecoilValue} from 'recoil'
import { UserRanking } from '../../Atom/Atom';
import { Link } from 'react-router-dom';


const RankPage = () => {
const rank =  useRecoilValue(UserRanking);
const [sortedRank, setSortedRank] = useState([]);

useEffect(()=>{
    const rankClone = JSON.parse(JSON.stringify(rank));
    console.log("clone ", rankClone);
    const data = rankClone.sort((a,b)=>{
     return  b.userResult - a.userResult
    })
    setSortedRank(data);
    console.log(data," sorted")
}, [rank])

  return (
    <div className={style.main}>
        <h1>See Your LeaderBoard</h1>
        <table >
            <thead>
           <tr>
            <th>Name</th>
            <th>Score</th>
           </tr>
            </thead>
            <tbody>
            {
        sortedRank.map((item)=>
        
         <tr>
            <td>{item.user}</td>
            <td>{item.userResult}</td> 
            </tr>
      
          ) }
            </tbody>
        </table>
        <div className={style.link}>
    <Link to={"/"}><h1>Go to home page</h1></Link>
    </div>
    </div>
  )
}

export default RankPage
