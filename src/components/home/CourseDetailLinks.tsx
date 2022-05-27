import { Container } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CourseShortDetail from "./CourseShortDetail";
import { Course } from "datatypes/coursetypes";
import { useSelector } from "react-redux";
import { State } from "redux/reducers";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CourseDetailLinks = (courses:any) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

const course: Course = useSelector(
  (state: State) => state.courses.courseData
);

  // console.log(course);
  return (
    <div>
      <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="xl">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#fff",
                borderBottom: "0px !important",
              },
            }}
          >
            <Tab
              label="About"
              {...a11yProps(0)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Instructors"
              {...a11yProps(1)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Syllabus"
              {...a11yProps(2)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Reviews"
              {...a11yProps(3)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Enrollment Options"
              {...a11yProps(4)}
              sx={{ textTransform: "none" }}
            />
            <Tab label="FAQ" {...a11yProps(5)} sx={{ textTransform: "none" }} />
          </Tabs>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <TabPanel value={value} index={0}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={8}>
                <Item sx={{ boxShadow: "0" }}>
                  <Typography sx={{ textAlign: "left", fontSize: "24px" }}>
                    About This Course
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    {course?.recentViews} recent views
                  </Typography>
                  <Typography sx={{ textAlign: "left", fontSize: "18px" }}>
                    {course?.courseDescription}
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} xl={4}>
                <Item sx={{ boxShadow: "0" }}>
                  <CourseShortDetail />
                </Item>
              </Grid>
              <Grid item xs={12} xl={8}>
                <Item
                  sx={{
                    padding: "20px",
                    boxShadow: "0",
                    border: "1px solid lightgray",
                  }}
                >
                  <Typography sx={{ textAlign: { xl: "left", xs: "center" } }}>
                    SKILLS YOU WILL GAIN
                  </Typography>
                  <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} xl={3} md={3}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{
                              backgroundColor: "lightgray",
                              borderRadius: "50px",
                              padding: "8px",
                            }}
                          >
                            {course?.skillOne}
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12} xl={3} md={3}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{
                              backgroundColor: "lightgray",
                              borderRadius: "50px",
                              padding: "8px",
                            }}
                          >
                            {course?.skillTwo}
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12} xl={3} md={3}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{
                              backgroundColor: "lightgray",
                              borderRadius: "50px",
                              padding: "8px",
                            }}
                          >
                            {course?.skillThree}
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12} xl={3} md={3}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{
                              backgroundColor: "lightgray",
                              borderRadius: "50px",
                              padding: "8px",
                            }}
                          >
                            {course?.skillFour}
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Instructors
        </TabPanel>
        <TabPanel value={value} index={2}>
          Syllabus
        </TabPanel>
        <TabPanel value={value} index={3}>
          Reviews
        </TabPanel>
        <TabPanel value={value} index={4}>
          Enrollment Options
        </TabPanel>
        <TabPanel value={value} index={5}>
          FAQ
        </TabPanel>
      </Container>
    </Box>
    </div>
  );
};

export default CourseDetailLinks;