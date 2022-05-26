import { Box, CircularProgress, Container } from "@mui/material";
import { Course } from "datatypes/coursetypes";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import CourseDetailLinks from "./CourseDetailLinks";
import CourseOverview from "./CourseOverview";

type Props = {
  courses: Course[];
};

const CourseHome = ({ courses }: Props) => {
  const course = useSelector((state: State) => state.courses.courseData);

  console.log(courses);

  if (!course) {
    return (
      <Container sx={{ minHeight: "40vh", my: 4, textAlign: "center" }}>
        <CircularProgress color="primary" />
      </Container>
    );
  }

  return (
    <div>
      <CourseOverview courses={courses}/>
      <CourseDetailLinks courses={courses}/>
    </div>
  );
};

export default CourseHome;
