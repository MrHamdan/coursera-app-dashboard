import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";


import { quizReducer } from "./quizReducer";

const reducers = combineReducers({
  courses: courseReducer,
  quizs:quizReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;


