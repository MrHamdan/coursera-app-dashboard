import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
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
const CourseShortDetail = () => {

const course: Course = useSelector(
  (state: State) => state.courses.courseData[0]
);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={2}>
          <Item sx={{ boxShadow: "0" }}>
            <CalendarMonthIcon
              sx={{
                border: "2px solid lightgray",
                borderRadius: "50%",
                fontSize: "45px",
                padding: "8px",
                color: "#f58025",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item sx={{ boxShadow: "0" }}>
            <Typography sx={{ textAlign: "left" }}>
              {course.courseDeadline} <br />
              Reset deadlines in accordance to your schedule.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ boxShadow: "0" }}>
            <LanguageIcon
              sx={{
                border: "2px solid lightgray",
                borderRadius: "50%",
                fontSize: "45px",
                padding: "8px",
                color: "#f58025",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item sx={{ boxShadow: "0" }}>
            <Typography sx={{ textAlign: "left" }}>
              {course.courseState} <br />
              Start instantly and learn at your own schedule.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ boxShadow: "0" }}>
            <SignalCellularAltIcon
              sx={{
                border: "2px solid lightgray",
                borderRadius: "50%",
                fontSize: "45px",
                padding: "8px",
                color: "#f58025",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item sx={{ boxShadow: "0" }}>
            <Typography sx={{ textAlign: "left" }}>{course.courseLevel}</Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ boxShadow: "0" }}>
            <AccessTimeIcon
              sx={{
                border: "2px solid lightgray",
                borderRadius: "50%",
                fontSize: "45px",
                padding: "8px",
                color: "#f58025",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item sx={{ boxShadow: "0" }}>
            <Typography sx={{ textAlign: "left" }}>
              {course.courseDuration}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ boxShadow: "0" }}>
            <ChatOutlinedIcon
              sx={{
                border: "2px solid lightgray",
                borderRadius: "50%",
                fontSize: "45px",
                padding: "8px",
                color: "#f58025",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item sx={{ boxShadow: "0" }}>
            <Typography sx={{ textAlign: "left" }}>
              {course.courseLanguage} 
              <Typography sx={{ fontSize: "14px" }}>
                Subtitles: Arabic, French, Portuguese (European), Italian,
                Vietnamese, German, Russian, English, Spanish
              </Typography>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseShortDetail;
