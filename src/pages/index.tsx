import type { GetStaticProps, NextPage } from "next";
import Navbar from "components/shared/Navbar";
import Footer from "components/shared/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CourseHome from "components/home/CourseHome";

import { Box } from "@mui/material";
import { Course } from "datatypes/coursetypes";

const Home: NextPage<{ courses: Course[] }> = ({ courses }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "COURSE_FETCH",
      payload: courses,
    });
  }, [courses, dispatch]);

  return (
    <div>
      <Box>
        <Navbar />
        <CourseHome courses={courses} />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://coursera-app-dashboard-9adbrebl6-mrhamdan.vercel.app/assets/data.json");
  const courses: Course[] = await res.json();
  return {
    props: {
      courses,
    },
  };
};
