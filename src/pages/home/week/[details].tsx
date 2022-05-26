import { GetStaticProps } from "next";
import LectureDetails from "components/lecturedetails/LectureDetails";
import { Course } from "datatypes/coursetypes";

const Index = ({ courses, week }: any) => {
  console.log(courses);
  return (
    <div>
      <LectureDetails courses={courses} week={week} />
    </div>
  );
};

export default Index;

export async function getStaticPaths() {
  const res = await fetch("https://jsonkeeper.com/b/87F3");
  const courses: Course[] = await res.json();

  let courseId: string[] = [];
  courses.forEach((course) => {
    course.courseWeeks.forEach((week) => {
      courseId.push(week.id.toString());
    });
  });
  const paths = courseId.map((week: any) => ({
    params: {
      details: week,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const res = await fetch("https://jsonkeeper.com/b/87F3");
  const courses: Course[] = await res.json();
  let week: any = [];
  courses.forEach(
    (course) =>
      (week = course.courseWeeks.filter(
        (week) => week.id == parseInt(context.params.details)
      ))
  );

  return {
    props: {
      courses,
      week,
    },
  };
};
