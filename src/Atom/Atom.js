import { Quizz } from '../Component/Const/QuizzConst'
import {atom} from 'recoil'
export const Api=atom({
    key:"api",
    default:[Quizz]
})

export const QuizResult=atom({
    key:"Result",
    default:null
})
export const UserRanking=atom({
    key:"Rank",
    default:[]
})