import Head from "next/head";
import { Box } from "@mui/material"
import QuizHome from "components/quiz/QuizHome";

import Quiz from "models/quizModels";


 type QuizProps={
     quizs:Quiz[]
 }

const Quiz =(props:QuizProps)=>{
    const quizs =props.quizs

    
    return<> 
            <Head>
                <title>Course Cloud || Quiz</title>
            </Head>
             <Box>
                <QuizHome quizs={quizs}/>
             </Box>
          </>
}

export default Quiz;


export async function  getStaticProps() {
    const res = await fetch('https://tawsifhye.github.io/data/quizes.json')

    const quizs= await res.json()

    return{
        props:{
            quizs
        }
    }
}