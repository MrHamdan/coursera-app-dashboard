import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
   } from "@mui/material";
// import SecondaryBtn from "components/shared/buttons/SecondaryBtn";
   import Image from "next/image";
   type Course ={
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
   
   type Props ={
       course:Course
   }
   
   const QuizCard = ( props:Props) => {
    
    const {course}=props
   
    return (
     <div>
         <Card sx={{ maxWidth: 345, bgcolor: "#21252D", color: "#fff" }}>
      <CardMedia
       component="img"
       height="212"
       image="/assets/images/cardimg.png"
       alt="green iguana"
      />
      <CardContent sx={{ px: 3 }}>
       <Typography gutterBottom component="div" sx={{ color: "#818181" }}>
        {course.courseType}
       </Typography>
       <Typography gutterBottom component="div" variant="h6">
        {course.title}
       </Typography>
       <Typography variant="body2" sx={{ color: "#969696" }}>
        {course?.courseDetails}
       </Typography>
      </CardContent>
      <CardActions
       sx={{ display: "flex", justifyContent: "space-between", px: 3, pb: 3 }}
      >
       
       {/* <SecondaryBtn
        textValue="ADD TO CART"
        bgcolor="#5193F6"
        borderColor="#fff"
        hoverBorderColor="#5193F6"
       /> */}
      </CardActions>
     </Card>
     </div>
    );
   };
   
   export default QuizCard;
   