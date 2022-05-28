import { Course, CourseWeek } from "datatypes/coursetypes";
import { GetStaticProps } from "next";
import LectureDetails from "components/lecturedetails/LectureDetails";

type Props = {
  courses: Course[];
  weekModules: CourseWeek[];
}

const Index = ({courses, weekModules}: Props) => {

  // console.log(weekModules);

  return (
    <div>
      <LectureDetails courses={courses}  weekModules={weekModules}/>
    </div>
  );
};

export default Index;


export async function getStaticPaths () {
  const res = await fetch("https://jsonkeeper.com/b/F4DY");
  const weeks: Course[] = await res.json();

  const paths = weeks.map((lectureweek)=> (
    lectureweek.courseWeeks.map((week)=> ({
      params: {
        details: week.id
      }
    }))
  )).flat();

  console.log(paths);

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps (context : any) {
  const res = await fetch("https://jsonkeeper.com/b/F4DY");
  const courses: Course[] = await res.json();

  const weeksModules = courses.map((course) => (
    course.courseWeeks.find((singleWeek) => singleWeek.id === context.params.details)
  )).flat();

  console.log(weeksModules)

  return {
    props: {
      courses,
      weekModules: weeksModules
    }
  }
  
}



// export async function getStaticPaths() {
//   const res = await fetch("https://jsonkeeper.com/b/21U8");
//   const weeks: Course = await res.json();

//   const paths = weeks.courseWeeks.map((week: any) => ({
//     params: {
//       details: week.id,
//     },
//   }));

//   // console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export const getStaticProps: GetStaticProps = async (context: any) => {
//   const res = await fetch("https://jsonkeeper.com/b/21U8");
//   const courses: Course = await res.json();
//   const week = courses.courseWeeks.find(
//     (course) => course.id === context.params.details
//   );
//   return {
//     props: {
//       courses,
//       week,
//     },
//   };
// };
