import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Link from "next/link";
import { CourseWeek } from "datatypes/coursetypes";

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

type Props = {
  weekModules: CourseWeek[];
};

const LectureContent = ({ weekModules }: Props) => {
  return (
    <div>
      <Box>
        {weekModules.map((weekModule) => (
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
                        sx={{
                          backgroundColor: "transparent",
                          "&:hover": {
                            backgroundColor: "#F3F8FF",
                          },
                        }}
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
                                      "&:hover": {
                                        backgroundColor: "#F3F8FF",
                                      },
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
                                  {weekModule?.lectureResources?.map(
                                    (lectureDetails) => (
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
                                              <PlayCircleOutlineIcon />
                                            </Box>
                                            <Box>
                                              <Typography
                                                sx={{
                                                  textAlign: "left",
                                                  marginLeft: "20px",
                                                }}
                                              >
                                                {lectureDetails.resourceTitle}{" "}
                                                <br />{" "}
                                                {lectureDetails.resourceType}.
                                                {
                                                  lectureDetails.resourceDuration
                                                }
                                              </Typography>
                                            </Box>
                                          </Box>
                                        </Item>
                                      </Link>
                                    )
                                  )}
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
        ))}
      </Box>
    </div>
  );
};

export default LectureContent;
