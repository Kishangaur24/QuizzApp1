import {atom} from 'recoil'
export const Api=atom({
    key:"api",
    default:[]
})

export const QuizResult=atom({
    key:"Result",
    default:null
})
export const UserRanking=atom({
    key:"Rank",
    default:[]
})