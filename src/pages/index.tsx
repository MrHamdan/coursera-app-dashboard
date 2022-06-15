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


export async function getStaticProps() {
  try {
    const res = await fetch("https://coursera-app-dashboard-672q6hoz6-mrhamdan.vercel.app/assets/data.json");
    const courses: Course[] = await res.json();
    return {
      props: {
        courses,
      },
    };
  }
  catch (err) {
    return {notFound:true}
  }
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("https://jsonkeeper.com/b/05OZ");
//   const courses: Course[] = await res.json();
//   return {
//     props: {
//       courses,
//     },
//   };
// };
