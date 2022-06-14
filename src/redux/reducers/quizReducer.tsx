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
    multipleOption:any
    singleSelect:any
    inputUserAns:any
    // finalAnswer:Quiz[]
}
const initialState ={
    quiz:[],
    multipleOption:{},
    singleSelect:[],
    inputUserAns:{}
}
interface Action {
    type:string;
    payload:any
}
export const quizReducer=(state:QuizState=initialState,action:Action):QuizState=>{
        switch(action.type){
            case "QUIZ":
                return{
                    ...state,
                    quiz:action.payload
                }
            case "MULTIPLE_SELECT":
                return{
                    ...state,
                    multipleOption:action.payload
                }
            case "SINGLE_SELECT" :
                return{
                    ...state,
                    singleSelect:action.payload
                }       
            case  "INPUT_ANS":
                return{
                    ...state,
                    inputUserAns:action.payload
                }     
            default :
                return state    
        }
}