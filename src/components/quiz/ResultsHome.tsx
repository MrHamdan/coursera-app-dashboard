import { Container } from "@mui/material";
import Quiz from "models/quizModels";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { State } from "redux/reducers";
import Answer from "./Answer";
import QuizCourse from "./QuizCourse";
import QuizResultHeader from "./QuizResultHeader";

type AnswerArray={
    questionId:string;
    question:string;
    options:{}[];
    selectedAnswer:{};
    level:string

}

const ResultsHome = () => {
    
    const answer= useSelector((state:State)=>state.allAnswer.finalAnswer)
    const [level,setLevel]=useState('')
    let beginner:number = 0;
    let intermediate:number = 0;
    let advanced:number = 0;
    let correctAnswerArray:string[]=[];
    console.log(Array(answer));
    
    answer?.forEach((element)=>{
            element.options.forEach((option)=>{
                if(option.isCorrect && element.selectedAnswer.isCorrect){
                    correctAnswerArray.push(option.option)
                    // quizAnswerlevel.push(element.level)
                }
            })
            if (element.selectedAnswer.isCorrect && element.level === 'beginner') {
                beginner++;
            }
            else if (element.selectedAnswer.isCorrect && element.level === 'intermediate') {
                 intermediate++;
            }
            else if (element.selectedAnswer.isCorrect && element.level === 'advanced') {
                advanced++;
            }
    })
    useEffect(() => {
                if (beginner > intermediate || beginner > advanced) {
                setLevel('beginner')
                }
                else if (intermediate > beginner || intermediate > advanced) {
                    setLevel('intermediate')
                }
                else if (advanced > beginner || advanced > intermediate) {
                setLevel('advanced');
                }
                else {
                    setLevel('beginner');
                    }
      },[beginner,advanced,intermediate])
    
    
  return (
    <Container>
        <QuizResultHeader answer={answer} correctAnswerArray={correctAnswerArray}/>
        <Answer answer={answer}></Answer>
        <QuizCourse level={level}/>
    </Container>
  )
}

export default ResultsHome