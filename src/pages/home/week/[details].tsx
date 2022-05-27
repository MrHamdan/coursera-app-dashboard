import { Course } from "datatypes/coursetypes";
import { GetStaticProps } from "next";
import LectureDetails from "components/lecturedetails/LectureDetails";

const Index = ({ courses, week }: any) => {
  return (
    <div>
      <LectureDetails courses={courses} week={week} />
    </div>
  );
};

export default Index;

export async function getStaticPaths() {
  const res = await fetch("https://jsonkeeper.com/b/21U8");
  const weeks: Course = await res.json();

  const paths = weeks.courseWeeks.map((week: any) => ({
    params: {
      details: week.id,
    },
  }));

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const res = await fetch("https://jsonkeeper.com/b/21U8");
  const courses: Course = await res.json();
  const week = courses.courseWeeks.find(
    (course) => course.id === context.params.details
  );
  return {
    props: {
      courses,
      week,
    },
  };
};
