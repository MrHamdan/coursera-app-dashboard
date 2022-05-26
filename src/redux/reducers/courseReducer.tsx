const initialState = {
  coursesData: [],
};

export const courseReducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case "COURSE_FETCH":
      return {
        ...state,
        courseData: action.payload,
      };
    default:
      return state;
  }
};
