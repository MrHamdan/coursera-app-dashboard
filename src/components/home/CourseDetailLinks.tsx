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

const CourseDetailLinks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
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
                    150,270 recent views
                  </Typography>
                  <Typography sx={{ textAlign: "left", fontSize: "18px" }}>
                    The basis for education in the last millennium was “reading,
                    writing, and arithmetic;” now it is reading, writing, and
                    computing. Learning to program is an essential part of the
                    education of every student, not just in the sciences and
                    engineering, but in the arts, social sciences, and
                    humanities, as well. Beyond direct applications, it is the
                    first step in understanding the nature of computer science’s
                    undeniable impact on the modern world. This course covers
                    the first half of our book Computer Science: An
                    Interdisciplinary Approach (the second half is covered in
                    our Coursera course Computer Science: Algorithms, Theory,
                    and Machines). Our intent is to teach programming to those
                    who need or want to learn it, in a scientific context. We
                    begin by introducing basic programming elements such as
                    variables, conditionals, loops, arrays, and I/O. Next, we
                    turn to functions, introducing key concepts such as
                    recursion, modular programming, and code reuse. Then, we
                    present a modern introduction to object-oriented
                    programming. We use the Java programming language and teach
                    basic skills for computational problem solving that are
                    applicable in many modern computing environments.
                    Proficiency in Java is a goal, but we focus on fundamental
                    concepts in programming, not Java per se. All the features
                    of this course are available for free. It does not offer a
                    certificate upon completion.
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
                            Programming Principles
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
                            Computer Science
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
                            Algorithms
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
                            Java Programming
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
  );
};

export default CourseDetailLinks;
