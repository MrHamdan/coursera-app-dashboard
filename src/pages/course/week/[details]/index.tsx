import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NavbarCourse from "components/shared/NavbarCourse";
import Image from "next/image";
import { Container, Typography, Button } from "@mui/material";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import QuizIcon from "@mui/icons-material/Quiz";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LoupeOutlinedIcon from "@mui/icons-material/LoupeOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LectureContent from "components/lecturecontent/LectureContent";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "0px solid rgba(0, 0, 0, .125)",
}));

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
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const index = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <NavbarCourse />
      <Container maxWidth="xl" sx={{ marginTop: "30px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={3} md={4}>
              <Item>
                <Box sx={{ textAlign: "left", marginLeft: "20px" }}>
                  <Image
                    src="/assets/images/princetonuniversity.png"
                    width="80"
                    height="80"
                    alt="princetonuniversity"
                  />
                </Box>
                <Typography sx={{ textAlign: "left", marginLeft: "20px" }}>
                  Computer Science: Programming with a Purpose
                </Typography>
                <Typography sx={{ textAlign: "left", marginLeft: "20px" }}>
                  Princeton University
                </Typography>
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "white",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography>Course Material</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Item sx={{ boxShadow: "0" }}>
                              <Box
                                sx={{
                                  flexGrow: 1,
                                  bgcolor: "background.paper",
                                  display: "flex",
                                  height: "100%",
                                }}
                              >
                                <Tabs
                                  orientation="vertical"
                                  variant="scrollable"
                                  value={value}
                                  onChange={handleChange}
                                  aria-label="Vertical tabs example"
                                  sx={{
                                    borderRight: 0,
                                    borderColor: "divider",
                                    marginTop: "-30px",
                                  }}
                                >
                                  <Tab
                                    label={
                                      <>
                                        <Typography
                                          sx={{ textTransform: "none" }}
                                        >
                                          Week 1
                                        </Typography>
                                      </>
                                    }
                                    {...a11yProps(0)}
                                  />
                                  <Tab
                                    label={
                                      <>
                                        <Typography
                                          sx={{ textTransform: "none" }}
                                        >
                                          Week 2
                                        </Typography>
                                      </>
                                    }
                                    {...a11yProps(1)}
                                  />
                                </Tabs>
                              </Box>
                            </Item>
                          </Grid>
                        </Grid>
                      </Box>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Box sx={{ marginTop: "-30px" }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{ textAlign: "left", marginLeft: "30px" }}
                          >
                            Grades
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{ textAlign: "left", marginLeft: "30px" }}
                          >
                            Notes
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{ textAlign: "left", marginLeft: "30px" }}
                          >
                            Discussion Forms
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{ textAlign: "left", marginLeft: "30px" }}
                          >
                            Messages
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{ textAlign: "left", marginLeft: "30px" }}
                          >
                            Resources
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={12} xl={6} md={4}>
              <Item sx={{ padding: "0px !important", boxShadow: "0" }}>
                <TabPanel value={value} index={0}>
                  <LectureContent />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <LectureContent />
                </TabPanel>
              </Item>
            </Grid>
            <Grid item xs={12} xl={3} md={4}>
              <Item sx={{ borderBottom: "1px solid lightgray" }}>
                <Typography sx={{ textAlign: "left" }}>Schedule</Typography>
                <Box sx={{ display: "flex", textAlign: "left" }}>
                  <Box>
                    <LocationOnIcon />
                  </Box>
                  <Box>
                    <Typography>Start date: May 14,2022 PDT</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", textAlign: "left" }}>
                  <Box>
                    <BadgeOutlinedIcon />
                  </Box>
                  <Box>
                    <Typography>Start date: May 14,2022 PDT</Typography>
                  </Box>
                </Box>
              </Item>
              <Item sx={{ borderBottom: "1px solid lightgray" }}>
                <Typography sx={{ textAlign: "left" }}>Upcoming</Typography>
                <Typography sx={{ textAlign: "left" }}>
                  Basic Programming Concepts
                </Typography>
                <Typography sx={{ textAlign: "left" }}>
                  Due May 16, 11:59 PM PDT Graded Quiz
                </Typography>
                <Typography sx={{ textAlign: "left" }}>Hello, World</Typography>
                <Typography sx={{ textAlign: "left" }}>
                  Due May 16, 11:59 PM PDT Graded
                </Typography>
                <Typography sx={{ textAlign: "left" }}>
                  Programming Assignment
                </Typography>
              </Item>
              <Item sx={{ borderBottom: "1px solid lightgray" }}>
                <Typography sx={{ textAlign: "left" }}>
                  Lets set a weekly goal
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box>
                    <Typography sx={{ textAlign: "left" }}>
                      Learners who set a goal are 75% more likely to complete
                      the course. We’ll help you track your progress.
                    </Typography>
                  </Box>
                  <Box>
                    <LoupeOutlinedIcon sx={{ fontSize: "44px" }} />
                  </Box>
                </Box>
                <Box sx={{ textAlign: "left" }}>
                  <Button variant="outlined" sx={{ textTransform: "none" }}>
                    Set goal
                  </Button>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default index;