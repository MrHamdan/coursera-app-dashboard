import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavbarCourse from "components/shared/NavbarCourse";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useRouter } from "next/router";
import Html from "components/html/Html";
import Video from "components/video/Video";
import { Course } from "datatypes/coursetypes";
import { GetStaticProps } from "next";

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

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Index = ({ week, lecture }: any) => {
  console.log(week);
  console.log(lecture);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNext = () => {
    if (value < 6) {
      setValue(value + 1);
    } else {
      console.info("You can't go next");
    }
  };

  const handleBack = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      console.info("You can't go back");
    }
  };
  return (
    <div>
      <Box>
        <NavbarCourse />
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={8}>
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
                      <Link underline="hover" color="inherit" href="/">
                        <Typography>
                          Computer Science: Programming Concepts
                        </Typography>
                      </Link>
                      <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                      >
                        <Typography>Week 1</Typography>
                      </Link>
                      <Typography color="text.primary">
                        Supplements for Lecture 1
                      </Typography>
                    </Breadcrumbs>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} xl={4}>
                <Item sx={{ boxShadow: "0" }}>
                  <Button onClick={handleBack}>Back</Button>
                  <Button onClick={handleNext}>Next</Button>
                </Item>
              </Grid>
              <Grid item xs={12} xl={3}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Typography
                            sx={{
                              textAlign: "left",
                              marginLeft: "20px",
                              fontWeight: "bold",
                              fontSize: "14px",
                            }}
                          >
                            Lecture 1: BASIC PROGRAMMING <br /> CONCEPTS
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={12} sx={{ marginTop: "-20px" }}>
                        <Item sx={{ boxShadow: "0" }}>
                          <Box
                            sx={{
                              flexGrow: 1,
                              bgcolor: "background.paper",
                              display: "flex",
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
                              }}
                            >
                              {week.lectureResources.map((item: any) => (
                                <Tab
                                  key={item.id}
                                  label={
                                    <>
                                      <Box
                                        sx={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <Box>
                                          <PlayCircleOutlineIcon
                                            sx={{ color: "gray" }}
                                          />
                                        </Box>
                                        <Box>
                                          <Typography
                                            sx={{
                                              textAlign: "left",
                                              fontSize: "14px",
                                              textTransform: "none",
                                              marginLeft: "10px",
                                            }}
                                          >
                                            <span className="reading">
                                              {item.resourceType}
                                            </span>
                                            : {item.resourceTitle} <br />{" "}
                                            {item.resourceDuration}
                                          </Typography>
                                        </Box>
                                      </Box>
                                    </>
                                  }
                                  {...a11yProps(0)}
                                />
                              ))}
                            </Tabs>
                          </Box>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} xl={8}>
                <Item sx={{ boxShadow: "0" }}>
                  <TabPanel value={value} index={0}>
                    <Html lecture={lecture} />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Video lecture={lecture} />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Video lecture={lecture} />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Video lecture={lecture} />
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                    <Video lecture={lecture} />
                  </TabPanel>
                  <TabPanel value={value} index={5}>
                    <Html lecture={lecture} />
                  </TabPanel>
                  <TabPanel value={value} index={6}>
                    Item Seven
                  </TabPanel>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Index;

export async function getStaticPaths() {
  const res = await fetch("https://jsonkeeper.com/b/LAPC");
  const weeks: Course = await res.json();

  // const paths = weeks.courseWeeks.map((item: any) => {
  //   const lecture = item.lectureResources.map((item: any) => ({
  //     params: {
  //       id: item.id,
  //     }
  //   }));
  // })

  const paths = weeks.courseWeeks.map((week: any) => ({
    params: {
      id: week.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const res = await fetch("https://jsonkeeper.com/b/LAPC");
  const courses: Course = await res.json();
  const week = courses?.courseWeeks?.find(
    (item: any) => parseInt(item.id) === parseInt(context.params?.id)
  );

  const lecture = week?.lectureResources?.find(
    (item: any) => parseInt(item.id) === parseInt(context.params?.id)
  );
  return {
    props: {
      week,
      lecture,
    },
  };
};
