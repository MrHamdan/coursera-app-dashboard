
import { Box, CircularProgress, Container } from "@mui/material";
import { Course } from "datatypes/coursetypes";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import CourseDetailLinks from "./CourseDetailLinks";
import CourseOverview from "./CourseOverview";



const CourseHome = () => {
  
  const course = useSelector((state: State) => state.courses.courseData);

  console.log(course);

if (!course) {
  return (
    <Container sx={{ minHeight: "40vh", my: 4, textAlign: "center" }}>
      <CircularProgress color="primary" />
    </Container>
  );
}

  return (
    <div>
      
        <CourseOverview />
        <CourseDetailLinks />
      
    </div>
  );
};

export default CourseHome;
