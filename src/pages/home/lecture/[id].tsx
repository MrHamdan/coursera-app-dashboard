import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavbarCourse from "components/shared/NavbarCourse";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useRouter } from "next/router";
import Html from "components/html/Html";
import Video from "components/video/Video";
import DoneIcon from "@mui/icons-material/Done";
import { GetStaticPaths, GetStaticProps } from "next";
import { Course, CourseWeek, LectureResource } from "datatypes/coursetypes";
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import SinglelectureDetails from "components/singlelecturedetails/SinglelectureDetails";


type Props = {
  lectureDetails: CourseWeek;
  singleLectureData: LectureResource;
}


const Index = ({lectureDetails, singleLectureData}: Props) => {

  return (
    <div>
      <Box>
      <SinglelectureDetails lectureDetails={lectureDetails} singleLectureData={singleLectureData}/>
      </Box>
    </div>
  );
};

export default Index;



  export async function getStaticPaths() {
    const res = await fetch("https://jsonkeeper.com/b/AG7S");
    const courses : Course[] = await res.json();

    const lectureData = courses.map ((course : Course) => course.courseWeeks).flat();

    const weeks = lectureData.map((week : CourseWeek) => week.lectureResources).flat();
    
    
    const paths = weeks.map ((lectureDetails : LectureResource) => ({
      params: {
        id: lectureDetails.id,
      }
    })).flat();


    console.log(paths);
  

    return {
      paths,
      fallback: false,
    }
  }




  export async function getStaticProps(context : any) {
    const res = await fetch("https://jsonkeeper.com/b/AG7S");
    const courses : Course[] = await res.json();
    const coursesData = courses.map((course : Course) => course.courseWeeks).flat();
    const weeks = coursesData.map((course : CourseWeek) => course.lectureResources).flat();
    const lectureDetails = coursesData.find((course : CourseWeek) => course.lectureResources.find((lecture : LectureResource) => lecture.id === context.params.id));

    console.log(lectureDetails)

    const singleLectureData = weeks.find((lecture : LectureResource) => lecture.id === context.params.id);

    console.log(singleLectureData);

    

    return {
      props: {
        lectureDetails,
        singleLectureData,
      }
    }
  }

// export async function getStaticPaths() {
//   const res = await fetch("https://jsonkeeper.com/b/21U8");
//   const courses: Course = await res.json();

//   const paths = courses.courseWeeks
//     .map((week) =>
//       week?.lectureResources?.map((lecture) => ({
//         params: {
//           id: lecture.id,
//         },
//       }))
//     )
//     .flat();

//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export const getStaticProps: GetStaticProps = async (context: any) => {
//   const res = await fetch("https://jsonkeeper.com/b/21U8");
//   const courses: Course = await res.json();

//   const weeks = courses?.courseWeeks?.find(
//     (lecture) => lecture
//   );

//   console.log(weeks);

//   return {
//     props: {
//       weeks,
//     },
//   };
// };
