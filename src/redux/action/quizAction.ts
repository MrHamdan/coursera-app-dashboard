import { Quiz } from "datatypes/coursetypes";

interface Payload{
    payload:Quiz
}
export const  setResults = (payload:Payload) => {
    return {
        type: "QUIZ",
        payload
    };
}