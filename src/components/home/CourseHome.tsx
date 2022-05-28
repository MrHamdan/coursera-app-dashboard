
import { Box, CircularProgress, Container } from "@mui/material";
import { Course } from "datatypes/coursetypes";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import CourseDetailLinks from "./CourseDetailLinks";
import CourseOverview from "./CourseOverview";

type Props = {
  courses: Course[];
}

const CourseHome = ({courses}: Props) => {
  
  const course = useSelector((state: State) => state.courses.courseData);

  // console.log(course);

if (!course) {
  return (
    <Container sx={{ minHeight: "40vh", my: 4, textAlign: "center" }}>
      <CircularProgress color="primary" />
    </Container>
  );
}

  return (
    <div>
      
        <Box>
          {
            courses.map((course: Course) => (
              <Box key={course.id}>
                <CourseOverview course={course}/>
                <CourseDetailLinks course={course}/>
              </Box>
            ))
          }
        </Box>
      
    </div>
  );
};

export default CourseHome;