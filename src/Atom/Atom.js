import {atom} from 'recoil'
export const Api=atom({
    key:"api",
    default:null
})

export const QuizResult=atom({
    key:"Result",
    default:null
})
export const UserRanking=atom({
    key:"Rank",
    default:[]
})