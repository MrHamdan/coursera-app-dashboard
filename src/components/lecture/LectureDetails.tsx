import React from "react";
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

const LectureDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNext = () => {
    // click next button to go to next tab
    if (value < 6) {
      setValue(value + 1);
    } else {
      setValue(0);
    }
  };

  const handleBack = () => {
    // click back button to go to previous tab
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(6);
    }
  };

  return (
    <Box>
      <NavbarCourse />
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
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
            <Grid item xs={4}>
              <Item>
                <Button onClick={handleBack}>Back</Button>
                <Button onClick={handleNext}>Next</Button>
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item sx={{ height: "700px" }}>
                <Typography sx={{ textAlign: "left", marginLeft: "30px" }}>
                  Lecture 1: BASIC PROGRAMMING <br /> CONCEPTS
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    bgcolor: "background.paper",
                    display: "flex",
                    height: 224,
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
                      height: "692px",
                    }}
                  >
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box>
                              <PlayCircleOutlineIcon sx={{ color: "gray" }} />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  textAlign: "left",
                                  fontSize: "14px",
                                  textTransform: "none",
                                }}
                              >
                                Reading: Supplements for Lecture 1 <br /> 10 min
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      }
                      {...a11yProps(0)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex" }}>
                            <Box>
                              <PlayCircleOutlineIcon sx={{ color: "gray" }} />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  textAlign: "left",
                                  fontSize: "14px",
                                  textTransform: "none",
                                }}
                              >
                                Video: Why Programming? <br /> 15 min
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      }
                      {...a11yProps(1)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex" }}>
                            <Box>
                              <PlayCircleOutlineIcon sx={{ color: "gray" }} />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  textAlign: "left",
                                  fontSize: "14px",
                                  textTransform: "none",
                                }}
                              >
                                Video: Program Development <br /> 16 min
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      }
                      {...a11yProps(2)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex" }}>
                            <Box>
                              <PlayCircleOutlineIcon sx={{ color: "gray" }} />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  textAlign: "left",
                                  fontSize: "14px",
                                  textTransform: "none",
                                }}
                              >
                                Video: Built-in data types <br /> 32 min
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      }
                      {...a11yProps(3)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex" }}>
                            <Box>
                              <PlayCircleOutlineIcon sx={{ color: "gray" }} />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  textAlign: "left",
                                  fontSize: "14px",
                                  textTransform: "none",
                                }}
                              >
                                Video: Type Conversion <br /> 10 min
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      }
                      {...a11yProps(4)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex" }}>
                            <Box>
                              <PlayCircleOutlineIcon sx={{ color: "gray" }} />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  textAlign: "left",
                                  fontSize: "14px",
                                  textTransform: "none",
                                }}
                              >
                                Reading: Optional Enrichment on <br /> Basic
                                Programming Concepts <br /> 10 min
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      }
                      {...a11yProps(5)}
                    />
                    <Tab
                      label={
                        <>
                          <Box sx={{ display: "flex" }}>
                            <Box>
                              <PlayCircleOutlineIcon sx={{ color: "gray" }} />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  textAlign: "left",
                                  fontSize: "14px",
                                  textTransform: "none",
                                }}
                              >
                                Programming Assignment: Hello, <br /> World{" "}
                                <br /> 8h
                              </Typography>
                            </Box>
                          </Box>
                        </>
                      }
                      {...a11yProps(6)}
                    />
                  </Tabs>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <TabPanel value={value} index={0}>
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                  Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                  Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                  Item Seven
                </TabPanel>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 224,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider", height:'700px' }}
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
            <Tab label="Item Four" {...a11yProps(3)} />
            <Tab label="Item Five" {...a11yProps(4)} />
            <Tab label="Item Six" {...a11yProps(5)} />
            <Tab label="Item Seven" {...a11yProps(6)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
        </Box> */}
    </Box>
  );
};

export default LectureDetails;