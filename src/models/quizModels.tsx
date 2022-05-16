

type Option={
    id:string;
    option:string;
    isCorrect:boolean
}

type Quiz ={
    id:string,
    question:string,
    options:Option[],
    right_answer:string,
    level:string
}
export default Quiz