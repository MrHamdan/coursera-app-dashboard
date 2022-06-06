import { LectureResource } from "datatypes/coursetypes";


// type Option ={
//     id:         number;
//     text:       string;
//     isCorrect?: boolean;
// }

// type Quiz ={
//     id:        number;
//     quizType:  string;
//     quizPoint: number;
//     question:  string;
//     option:    Option[];
//     answer:    number | string;
//     module?:   string;
// }

interface QuizState {
    quiz:any
    // finalAnswer:Quiz[]
}
const initialState ={
    quiz:[]
    // finalAnswer:[]
}
interface Action {
    type:string;
    payload:LectureResource
}
export const quizReducer=(state:QuizState=initialState,action:Action):QuizState=>{
        switch(action.type){
            case "QUIZ":
                return{
                    ...state,
                    quiz:action.payload
                }
            // case  "SUBMIT_QUIZ":
            //     return{
            //         ...state,
            //         finalAnswer:action.payload
            //     }     
            default :
                return state    
        }
}