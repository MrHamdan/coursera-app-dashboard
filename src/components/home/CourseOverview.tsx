import { Avatar, Box, Button, Container } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Image from "next/image";
import Rating from "@mui/material/Rating";

import { useSelector } from "react-redux";
import { State } from "redux/reducers";
import { Course } from "datatypes/coursetypes";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

type Props = {
  course: Course;
}

const CourseOverview = (props:Props) => {
  const { course } = props;

  
  const [value, setValue] = React.useState<number | null>();
  // console.log(course);

  

  // const course: Course = useSelector(
  //   (state: State) => state.courses.courseData
  // );

  return (
    <div>
      <Box
      sx={{
        width: "100%",
        height: { xl: "554px", xs: "660px" },
        background: "linear-gradient(90deg, rgb(245, 128, 37), rgb(0, 0, 0))",
        marginTop: "20px",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={12} xl={6}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  backgroundColor: "transparent",
                  boxShadow: "0",
                }}
              >
                <div role="presentation" onClick={handleClick}>
                  <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link
                      underline="hover"
                      color="white"
                      href="/"
                      sx={{
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      Browse
                    </Link>
                    <Link
                      underline="hover"
                      color="white"
                      href="/material-ui/getting-started/installation/"
                      sx={{
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      Computer Science
                    </Link>
                    <Link
                      underline="hover"
                      color="white"
                      href="/material-ui/getting-started/installation/"
                      sx={{
                        fontFamily: "Open Sans",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      Software Development
                    </Link>
                  </Breadcrumbs>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} xl={6}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  backgroundColor: "transparent",
                  boxShadow: "0",
                }}
              >
                <Typography sx={{ color: "white ", fontFamily: "Open Sans" }}>
                  Offered By
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} xl={6}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  backgroundColor: "transparent",
                  boxShadow: "0",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    textAlign: "left",
                    fontSize: { xl: "34px", xs: "18px" },
                    color: "white",
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                  }}
                >
                  {course.title}
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} xl={6}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  backgroundColor: "transparent",
                  boxShadow: "0",
                }}
              >
                <Box sx={{ marginTop: { xl: "-50px", xs: "" } }}>
                  <Image
                    src="/assets/images/princeton.png"
                    width="157px"
                    height="70px"
                    alt="princetonuniversity"
                  />
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} xl={12}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  backgroundColor: "transparent",
                  boxShadow: "0",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="read-only"
                  value={value}
                  readOnly
                  size="small"
                  defaultValue={4.5}
                  precision={0.5}
                />
                <Typography sx={{ marginLeft: "10px", color: "white" }}>
                  {course.rating} 656 ratings
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} xl={12}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  backgroundColor: "transparent",
                  boxShadow: "0",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box>
                    <Avatar
                      alt="instructor"
                      src="/assets/images/instructor.png"
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        marginLeft: "10px",
                        fontSize: "14px",
                      }}
                    >
                      {course.instructorName}
                      <span className="link">+1 more instructor</span>
                    </Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} xl={12}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  backgroundColor: "transparent",
                  boxShadow: "0",
                  alignItems: "center",
                }}
              >
                <Link href={`/home/week/week1`} sx={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      backgroundColor: "white !important",
                      textTransform: "none",
                      borderRadius: "0",
                      width: "179.05px",
                      height: "71px",
                      "&:hover": {
                        opacity: "0.5",
                      },
                    }}
                  >
                    <Typography sx={{ color: "black" }}>
                      Enroll For Free <br /> Starts May 11
                    </Typography>
                  </Button>
                </Link>
              </Item>
            </Grid>
            <Grid item xs={12} xl={12}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  backgroundColor: "transparent",
                  boxShadow: "0",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "white" }}>
                  {course.enrolledStudents} <span>already enrolled</span>
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    </div>
  );
};

export default CourseOverview;