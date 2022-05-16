import { Box, Typography } from "@mui/material"
type Option ={
    id:string;
    option:string;
    isCorrect:boolean;
}

type Quiz ={
    questionId:string;
    question:string;
    options:Option[];
    selectedAnswer:Option;
    level:string
}
type Props ={
    answer:Quiz[]
    correctAnswerArray:string[]
}
const QuizResultHeader = (props:Props) => {
    const {answer,correctAnswerArray}=props
  return (
    <Box sx={{background: "#282D37",px:2,mt:2,color:"#fff", height:"50px", display: 'flex',justifyContent: 'space-between',alignItems: 'center',borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}>
       <Typography>{correctAnswerArray.length} /{ answer.length} answer</Typography>

       { 
        correctAnswerArray.length > 5 ? <Typography> Quiz Pass</Typography>:<Typography> Quiz Fail</Typography>
       }
    
    </Box>
  )
}

export default QuizResultHeader