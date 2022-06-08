import { Course, CourseWeek } from "datatypes/coursetypes";
import LectureDetails from "components/lecturedetails/LectureDetails";

type Props = {
  courses: Course[];
  weekModules: CourseWeek[];
};

const Index = ({ courses, weekModules }: Props) => {
  return (
    <div>
      <LectureDetails courses={courses} weekModules={weekModules} />
    </div>
  );
};

export default Index;

export async function getStaticPaths() {
  const res = await fetch("https://jsonkeeper.com/b/05OZ");
  const weeks: Course[] = await res.json();

  const paths = weeks
    .map((lectureweek) =>
      lectureweek.courseWeeks.map((week) => ({
        params: {
          details: week.id,
        },
      }))
    )
    .flat();

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const res = await fetch("https://jsonkeeper.com/b/05OZ");
  const courses: Course[] = await res.json();

  const weeksModules = courses
    .map((course) =>
      course.courseWeeks.find(
        (singleWeek) => singleWeek.id === context.params.details
      )
    )
    .flat();

  

  return {
    props: {
      courses,
      weekModules: weeksModules,
    },
  };
}
