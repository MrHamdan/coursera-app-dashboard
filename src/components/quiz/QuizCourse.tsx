import { Box, Container,Grid,Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import QuizCard from "./QuizCard";

type Props ={
    level:string
}
type AllCourses ={
    id:string;
    title:string;
   
    videoURL:string;
    mainPrice:string;
    level:string;
    courseType:string;
    courseCover:string;
    courseDetails:string;
    discountPercent:string;
    instructorDetails:{}

}
const QuizCourse = (props:Props) => {
    const {level}=props;
    const [allCourses,setAllCourses]=useState<Array<AllCourses>>([])
    const [courses,setCourses]=useState<Array<AllCourses>>([])
    useEffect(()=>{
        fetch('/courses.json')
        .then(res=>res.json())
        .then(data=>setAllCourses(data))
    },[])
    console.log(allCourses);
    
    useEffect(()=>{
        const courseBylevel=(allCourses).filter(course=>course.level === level)
        setCourses(courseBylevel)
    },[allCourses,level])
  return (
    <Box sx={{my:3}}>
        <Container>
            <Box sx={{display:'flex',justifyContent:'center'}}>
                <Typography  variant="h3" sx={{ fontSize: "36px", textAlign: "center",my:3 }}>Recommended Courses For you</Typography>
            </Box>
            <Grid container spacing={2}>
                    {
                        courses?.map(course=><Grid
                            item
                            xs={12}
                            md={6}
                            lg={3}
                            key={course?.id}
                            sx={{
                             display: "flex",
                             justifyContent: "center",
                            }}
                           >
                            <QuizCard course={course} />
                           </Grid>)
                    }
              </Grid>
              <Box sx={{ textAlign: 'center', py: 2 }}>
                     <Link href="/quiz"><a> <Button sx={{
                     color: '#fff', backgroundColor: '#D19F28', px: 3, "&:hover": {
                         backgroundColor: "#D19F28"
                        }
                    }}>Retake</Button></a></Link>
        </Box>
        </Container>

    </Box>
  )
}

export default QuizCourse