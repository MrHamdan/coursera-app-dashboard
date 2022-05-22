

const initialState = {
  courseData: {},
  weekData: {},
  
};

export const courseReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "COURSE_FETCH":
      return {
        ...state,
        courseData: action.payload,
      };
    case "'WEEK_FETCH": 
    return{
      ...state,
      weekData: action.payload
    }
    default:
      return state;
  }
};
