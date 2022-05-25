import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import CourseOverview from "components/home/CourseOverview";
import Navbar from "components/shared/Navbar";
import CourseDetailLinks from "components/home/CourseDetailLinks";
import Footer from "components/shared/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CourseHome from "components/home/CourseHome";
import { Course } from "datatypes/coursetypes";
import { Box } from "@mui/material";

const Home: NextPage<{ courses: Course }> = (courses) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "COURSE_FETCH",
      payload: courses.courses,
    });
  }, [courses, dispatch]);

  return (
    <div>
      <Box>
        <Navbar />
        <CourseHome />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonkeeper.com/b/LAPC");
  const courses: Course = await res.json();
  return {
    props: {
      courses,
    },
  };
};
