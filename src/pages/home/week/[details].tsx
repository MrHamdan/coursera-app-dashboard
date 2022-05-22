import { Box } from "@mui/material";
import LectureContent from "components/lecturecontent/LectureContent";
import { Course } from "datatypes/coursetypes";
import CourseLayout from "layouts/course";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Index = (courses: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "COURSE_FETCH",
            payload: courses.courses,
        });
    }, [courses, dispatch]);

    // console.log(courses);


    const router = useRouter();
    const data = courses?.courses;
    // console.log(data.courseWeeks, "courses");
    const weekNumber = router.asPath.split("/")['3']
    let matchedWeek = data?.courseWeeks?.find((item: any) => parseInt(item.id) === parseInt(weekNumber));


    return (
        <div>
            <Box>
            <LectureContent week={matchedWeek} />
        </Box>
        </div>

    );
};


Index.PageLayout = CourseLayout;

export default Index;


export async function getStaticPaths() {
    const res = await fetch("https://jsonkeeper.com/b/M6QQ");
    const weeks:Course = await res.json();
    
    const paths = weeks.courseWeeks.map((week: any) => ({
        params: {
            details: week.id.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

    // const paths = weeks?.courses[0]?.courseWeeks?.map((week):any => ({
    //     params: {
    //         week: week.id,
    //     },
    // }));
    // return {
    //     paths,
    //     fallback: false,
    // };
//   const paths = weeks.map((week: any) => ({
//     params: { details: week.id.toString() },
//   }));
//   return { paths, fallback: false };
// const paths = weeks?.forEach((week: any) => {
//     week?.courseWeeks?.forEach((item: any) => {
//             params : { details: item.id.toString() }
//     })
// })
// return{paths, fallback: false};

// export async function getStaticPaths() {
//     const res = await fetch("https://jsonkeeper.com/b/YVUZ");
//     const weeks = await res.json();
//     const paths = weeks.map((week:any => week.courseWeeks.map((item):any => 
//       {params : { details: item.id.toString() }},
//       )))
//     return { paths, fallback: false };
//   }


export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch("https://jsonkeeper.com/b/M6QQ");
    const courses: Course = await res.json();
    const week = courses.courseWeeks.find((item: any) => item.id === (context.params?.details));
    return {
        props: {
            courses,
        },
    };
};
