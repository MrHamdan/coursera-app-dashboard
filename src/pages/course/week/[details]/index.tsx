import { Box } from "@mui/material";
import LectureContent from "components/lecturecontent/LectureContent";
import { Course } from "datatypes/coursetypes";
import CourseLayout from "layouts/course";
import { GetStaticProps, NextPage } from "next";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Week = (courses:any, week:any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "COURSE_FETCH",
      payload: courses.courses,
    });
  }, [courses, dispatch]);

  console.log(courses);
  return (
    <Box>
      <LectureContent week={week} />
    </Box>
  );
};


Week.PageLayout = CourseLayout;

export default Week;


export async function getStaticPaths() {
  const res = await fetch("https://jsonkeeper.com/b/S72U");
  const weeks = await res.json();
  const paths = weeks.map((week: any) => ({
    params: { details: week.id.toString() },
  }));
  return { paths, fallback: false };
}



export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://jsonkeeper.com/b/S72U");
  const courses: Course = await res.json();
  return {
    props: {
      courses,
    },
  };
};
