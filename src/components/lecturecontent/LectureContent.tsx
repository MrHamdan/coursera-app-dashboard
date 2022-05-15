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

const LectureContent = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={12}>
            <Item sx={{ padding: "0px !important" }}>
              <Accordion sx={{ border: "1px solid black" }}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>BASICPROGRAMMING CONCEPTS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Item>
                          <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} xl={4}>
                                <Item>
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
                                        58 min of videos left
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Item>
                              </Grid>
                              <Grid item xs={12} xl={4}>
                                <Item>
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
                                        10 min of readings left
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Item>
                              </Grid>
                              <Grid item xs={12} xl={4}>
                                <Item>
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
                                        2 graded assignments left
                                      </Typography>
                                    </Box>
                                  </Box>
                                </Item>
                              </Grid>
                              <Grid item xs={12}>
                                <Item>
                                  <Typography sx={{ textAlign: "left" }}>
                                    Why program? This lecture addresses that
                                    basic question. Then it describes the
                                    anatomy of your first program and the
                                    process of developing a program in Java
                                    using either virtual terminals or a program
                                    development environment, with some
                                    historical context. Most of the lecture is
                                    devoted to a thorough coverage of Javas
                                    built-in data types, with example programs
                                    for each.
                                  </Typography>
                                </Item>
                              </Grid>
                            </Grid>
                          </Box>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                  <Accordion sx={{ border: "1px solid black" }}>
                    <AccordionSummary
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} xl={8}>
                            <Item>
                              <Typography>
                                Lecture1: BASICPROGRAMMING CONCEPTS
                              </Typography>
                            </Item>
                          </Grid>
                          <Grid item xs={12} xl={4}>
                            <Item>
                              <Typography>
                                2 graded assignments left
                              </Typography>
                            </Item>
                          </Grid>
                        </Grid>
                      </Box>
                      {/* <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Box>
                          <Typography>
                            Lecture1: BASICPROGRAMMING CONCEPTS
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ marginLeft: "100px" }}>
                            2 graded assignments left
                          </Typography>
                        </Box>
                      </Box> */}
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Item>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Box>
                                  <AutoStoriesIcon
                                    sx={{
                                      border: "1px solid black",
                                      borderRadius: "50%",
                                      padding: "3px",
                                    }}
                                  />
                                </Box>
                                <Box>
                                  <Typography
                                    sx={{
                                      textAlign: "left",
                                      marginLeft: "20px",
                                    }}
                                  >
                                    Supplementsfor Lecture1 <br /> Reading . 10
                                    min
                                  </Typography>
                                </Box>
                              </Box>
                            </Item>
                          </Grid>
                          <Grid item xs={12}>
                            <Item>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Box>
                                  <PlayCircleOutlineIcon />
                                </Box>
                                <Box>
                                  <Typography
                                    sx={{
                                      textAlign: "left",
                                      marginLeft: "20px",
                                    }}
                                  >
                                    Supplementsfor Lecture1 <br /> Reading . 10
                                    min
                                  </Typography>
                                </Box>
                              </Box>
                            </Item>
                          </Grid>
                          <Grid item xs={12}>
                            <Item>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Box>
                                  <PlayCircleOutlineIcon />
                                </Box>
                                <Box>
                                  <Typography
                                    sx={{
                                      textAlign: "left",
                                      marginLeft: "20px",
                                    }}
                                  >
                                    Supplementsfor Lecture1 <br /> Reading . 10
                                    min
                                  </Typography>
                                </Box>
                              </Box>
                            </Item>
                          </Grid>
                          <Grid item xs={12}>
                            <Item>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Box>
                                  <PlayCircleOutlineIcon />
                                </Box>
                                <Box>
                                  <Typography
                                    sx={{
                                      textAlign: "left",
                                      marginLeft: "20px",
                                    }}
                                  >
                                    Supplementsfor Lecture1 <br /> Reading . 10
                                    min
                                  </Typography>
                                </Box>
                              </Box>
                            </Item>
                          </Grid>
                          <Grid item xs={12}>
                            <Item>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Box>
                                  <PlayCircleOutlineIcon />
                                </Box>
                                <Box>
                                  <Typography
                                    sx={{
                                      textAlign: "left",
                                      marginLeft: "20px",
                                    }}
                                  >
                                    Supplementsfor Lecture1 <br /> Reading . 10
                                    min
                                  </Typography>
                                </Box>
                              </Box>
                            </Item>
                          </Grid>
                          <Grid item xs={12}>
                            <Item>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Box>
                                  <PlayCircleOutlineIcon />
                                </Box>
                                <Box>
                                  <Typography
                                    sx={{
                                      textAlign: "left",
                                      marginLeft: "20px",
                                    }}
                                  >
                                    Supplementsfor Lecture1 <br /> Reading . 10
                                    min
                                  </Typography>
                                </Box>
                              </Box>
                            </Item>
                          </Grid>
                          <Grid item xs={12}>
                            <Item>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Box>
                                  <QuizIcon
                                    sx={{
                                      border: "1px solid black",
                                      borderRadius: "50%",
                                      padding: "3px",
                                    }}
                                  />
                                </Box>
                                <Box>
                                  <Typography
                                    sx={{
                                      textAlign: "left",
                                      marginLeft: "20px",
                                    }}
                                  >
                                    Supplementsfor Lecture1 <br /> Reading . 10
                                    min
                                  </Typography>
                                </Box>
                              </Box>
                            </Item>
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
    </div>
  );
};

export default LectureContent;
