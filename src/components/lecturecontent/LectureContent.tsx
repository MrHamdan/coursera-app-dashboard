import React, { useEffect, useState } from "react";
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
import { Course, CourseWeek } from "datatypes/coursetypes";
import { useRouter } from "next/router";

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

type Props = {
  weekModules: CourseWeek[];
}

const LectureContent = ({weekModules}: Props) => {
  
  console.log(weekModules);

  return (
    <div>
      <Box>
        {
          weekModules.map((weekModule) => (
            <Box key={weekModule.id}>
              <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12}>
              <Item sx={{ padding: "0px !important" }}>
                <Accordion
                  sx={{
                    border: "1px solid black",
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <Typography>{weekModule?.lectureTitle}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Item sx={{ boxShadow: "0" }}>
                            <Box sx={{ flexGrow: 1 }}>
                              <Grid container spacing={2}>
                                <Grid item xs={12} xl={4}>
                                  <Item sx={{ boxShadow: "0" }}>
                                    <Box
                                      sx={{
                                        display: "flex",
                                      }}
                                    >
                                      <Box>
                                        <PlayCircleOutlineIcon />
                                      </Box>
                                      <Box>
                                        <Typography
                                          sx={{
                                            marginLeft: "5px",
                                            fontSize: "14px",
                                            marginTop: "2px",
                                          }}
                                        >
                                          {weekModule.lectureVideos}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Item>
                                </Grid>
                                <Grid item xs={12} xl={4}>
                                  <Item sx={{ boxShadow: "0" }}>
                                    <Box
                                      sx={{
                                        display: "flex",
                                      }}
                                    >
                                      <Box>
                                        <AutoStoriesIcon
                                          sx={{
                                            border: "1px solid lightgray",
                                            borderRadius: "50%",
                                            padding: "3px",
                                          }}
                                        />
                                      </Box>
                                      <Box>
                                        <Typography
                                          sx={{
                                            marginLeft: "5px",
                                            fontSize: "14px",
                                            marginTop: "2px",
                                          }}
                                        >
                                          {weekModule.lectureSheet}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Item>
                                </Grid>
                                <Grid item xs={12} xl={4}>
                                  <Item sx={{ boxShadow: "0" }}>
                                    <Box
                                      sx={{
                                        display: "flex",
                                      }}
                                    >
                                      <Box>
                                        <PlayCircleOutlineIcon />
                                      </Box>
                                      <Box>
                                        <Typography
                                          sx={{
                                            marginLeft: "5px",
                                            fontSize: "14px",
                                            marginTop: "2px",
                                          }}
                                        >
                                          {weekModule.lectureAssignment}
                                        </Typography>
                                      </Box>
                                    </Box>
                                  </Item>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  sx={{ borderTop: "1px solid lightgray" }}
                                >
                                  <Item
                                    sx={{
                                      boxShadow: "0",
                                      marginBottom: "30px",
                                    }}
                                  >
                                    <Typography sx={{ textAlign: "left" }}>
                                      {weekModule.lectureDescription}
                                    </Typography>
                                  </Item>
                                </Grid>
                              </Grid>
                            </Box>
                          </Item>
                        </Grid>
                      </Grid>
                    </Box>
                    <Accordion
                      sx={{ "&:hover": { border: "1px solid black" } }}
                    >
                      <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{
                          borderBottom: "1px solid lightgray",
                          "&:hover": { backgroundColor: "#F3F8FF" },
                          backgroundColor: "transparent",
                        }}
                      >
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} xl={8}>
                              <Item
                                sx={{
                                  boxShadow: "0",
                                  backgroundColor: "transparent",
                                }}
                              >
                                <Typography sx={{ textAlign: "left" }}>
                                  Lecture1: BASICPROGRAMMING CONCEPTS
                                </Typography>
                              </Item>
                            </Grid>
                            <Grid item xs={12} xl={4}>
                              <Item
                                sx={{
                                  boxShadow: "0",
                                  backgroundColor: "transparent",
                                }}
                              >
                                <Typography>
                                  2 graded assignments left
                                </Typography>
                              </Item>
                            </Grid>
                          </Grid>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              {weekModule?.lectureResources?.map((lectureDetails) => (
                              <Link
                                key={lectureDetails.id}
                                href={`/home/lecture/${lectureDetails.id}`}
                              >
                                <Item
                                  sx={{
                                    boxShadow: "0",
                                    "&:hover": {
                                      backgroundColor: "#F5F7F8",
                                      cursor: "pointer",
                                    },
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Box>
                                      <PlayCircleOutlineIcon
                                      />
                                    </Box>
                                    <Box>
                                      <Typography
                                        sx={{
                                          textAlign: "left",
                                          marginLeft: "20px",
                                        }}
                                      >
                                        {lectureDetails.resourceTitle} <br />{" "}
                                          {lectureDetails.resourceType}.
                                          {lectureDetails.resourceDuration}
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Item>
                              </Link>
                               ))} 
                            </Grid>
                          </Grid>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
              </Item>
            </Grid>
          </Grid>
        </Box>
            </Box>
          ))
        }

      </Box>
    </div>
  );
};

export default LectureContent;
