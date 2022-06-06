import React from "react";
import Box from "@mui/material/Box";
import { Course, CourseWeek, LectureResource } from "datatypes/coursetypes";
import SinglelectureDetails from "components/singlelecturedetails/SinglelectureDetails";

type Props = {
  lectureDetails: CourseWeek;
  singleLectureData: LectureResource;
};

const Index = ({ lectureDetails, singleLectureData }: Props) => {
  return (
    <div>
      <Box>
        <SinglelectureDetails
          lectureDetails={lectureDetails}
          singleLectureData={singleLectureData}
        />
      </Box>
    </div>
  );
};

export default Index;

export async function getStaticPaths() {
  const res = await fetch("https://coursera-app-dashboard-9adbrebl6-mrhamdan.vercel.app/assets/data.json");
  const courses: Course[] = await res.json();

  const lectureData = courses
    .map((course: Course) => course.courseWeeks)
    .flat();

  const weeks = lectureData
    .map((week: CourseWeek) => week.lectureResources)
    .flat();

  const paths = weeks
    .map((lectureDetails: LectureResource) => ({
      params: {
        id: lectureDetails.id,
      },
    }))
    .flat();

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const res = await fetch("https://coursera-app-dashboard-9adbrebl6-mrhamdan.vercel.app/assets/data.json");
  const courses: Course[] = await res.json();
  const coursesData = courses
    .map((course: Course) => course.courseWeeks)
    .flat();
  const weeks = coursesData
    .map((course: CourseWeek) => course.lectureResources)
    .flat();
  const lectureDetails = coursesData.find((course: CourseWeek) =>
    course.lectureResources.find(
      (lecture: LectureResource) => lecture.id === context.params.id
    )
  );

  console.log(lectureDetails);

  const singleLectureData = weeks.find(
    (lecture: LectureResource) => lecture.id === context.params.id
  );

  console.log(singleLectureData);

  return {
    props: {
      lectureDetails,
      singleLectureData,
    },
  };
}
