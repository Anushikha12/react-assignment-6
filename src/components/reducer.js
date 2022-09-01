import { addList } from "./action"
import AddList from "./action"
const initialdata={
    list:[{name:'Anushikha',age:23,course:'MERN',batch:'EA12'}]
}

export const studentRed=(state=initialdata,action)=>{
    switch(action.type){
        case AddList:
            return {
                ...state,
                list:[...state.list,payload]
            }
            default:
                return state;
    }
}