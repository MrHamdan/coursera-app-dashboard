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
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useRouter } from "next/router";
import Html from "components/html/Html";
import Video from "components/video/Video";
import { CourseWeek, LectureResource } from "datatypes/coursetypes";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import QuizHome from "components/quiz/QuizHome";
import QuizStart from "components/quiz/QuizStart";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" size="4rem" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

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

type Props = {
  lectureDetails: CourseWeek;
  singleLectureData: LectureResource;
};

const SinglelectureDetails = ({ lectureDetails, singleLectureData }: Props) => {

  const router = useRouter()
  const [progress, setProgress] = React.useState(0);
  const [isShow, setIsShow] = React.useState(false)
  const [value, setValue] = React.useState(0);
  const id = parseInt(router.asPath.slice(26,30));
  React.useEffect(() => {
    
      setValue(id-1)
    
  }, [id]);
  console.log(lectureDetails.lectureResources);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  console.log(id);

  
  if(!singleLectureData){
    return <Box>loading</Box>
  }

  
  const handleNext = () => {
    lectureDetails.lectureResources.map((lecture) => {
      if (lecture.id === singleLectureData.id) {
        let index = lectureDetails.lectureResources.indexOf(lecture);
        if (index + 1 < lectureDetails.lectureResources.length) {
          router.push(
            `/home/lecture/${lectureDetails.lectureResources[index + 1].id}`
          );
        }
      }
      if (lecture.id === singleLectureData.id) {
        lecture.isCompleted = true;
      }
    });

    if (value < 6) {
      setProgress(((value + 1) / 6) * 100);

      setValue(value + 1);
    } else {
      setProgress(100);
      console.info("You can't go next");
    }

    if (value === 6) {

      router.push(`/home/lecture/week2content1`);
      setProgress(0);
      setValue(0);
    }
  };



  const handleBack = () => {
    lectureDetails.lectureResources.map((lecture) => {
      if (lecture.id === singleLectureData.id) {
        let index = lectureDetails.lectureResources.indexOf(lecture);
        if (index - 1 >= 0) {
          router.push(
            `/home/lecture/${lectureDetails.lectureResources[index - 1].id}`
          );
        }
      }
    });

    if (value > 0) {
      setValue(value - 1);
    } else {
      console.info("You can't go back");
    }
  };
 
  return (
    <div>
      <Box>
        {isShow == false && <NavbarCourse />}
        {isShow == false && <Container maxWidth="xl">

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
                      <Link color="inherit" href="/">
                        <Typography>
                          Computer Science: Programming Concepts
                        </Typography>
                      </Link>
                      <Link
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                      >
                        <Typography>{lectureDetails.id}</Typography>
                      </Link>
                      <Typography color="text.primary">
                        {singleLectureData.resourceTitle}
                      </Typography>
                    </Breadcrumbs>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={12} xl={4}>
                <Item
                  sx={{
                    boxShadow: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgressWithLabel value={progress} />
                  <Box sx={{ marginLeft: "30px" }}>
                    {value > 0 && (
                      <Button
                        sx={{ textTransform: "none" }}
                        onClick={handleBack}
                      >
                        <ArrowBackIosIcon sx={{ fontSize: "14px" }} /> Previous
                      </Button>
                    )}
                    <Button sx={{ textTransform: "none" }} onClick={handleNext}>
                      Next <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                    </Button>
                  </Box>
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
                              {lectureDetails?.lectureResources?.map(
                                (item: any) => (
                                  <Tab
                                    sx={{"&:hover":{background:'#f5f7f8',borderLeft:'6px solid rgb(25, 118, 210)'},borderLeft:'6px solid transparent'}}
                                    key={item.id}
                                    label={
                                      <>
                                        <Link href={`/home/lecture/${item.id}`}>
                                          <Box
                                            sx={{
                                              display: "flex",
                                              alignItems: "center",

                                            }}
                                          >
                                            {item.isCompleted === true ? (
                                              <CheckCircleIcon
                                                sx={{ color: "#1F8354" }}
                                              />
                                            ) : (
                                              <Box>
                                                <PlayCircleOutlineIcon
                                                  sx={{ color: "gray" }}
                                                />
                                              </Box>
                                            )}

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
                                        </Link>
                                      </>
                                    }
                                    {...a11yProps(0)}
                                  />
                                )
                              )}
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
                    {id==1?<Html singleLectureData={singleLectureData} />: <Box sx={{display:'flex',alignItems:'center',height:'50vh',justifyContent:'center'}}>  <CircularProgress /></Box> }
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    {id==2 ?<Video singleLectureData={singleLectureData} />:<Box sx={{display:'flex',alignItems:'center',height:'50vh',justifyContent:'center'}}>  <CircularProgress /></Box> }
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  {id==3 ?<Video singleLectureData={singleLectureData} />:<Box sx={{display:'flex',alignItems:'center',height:'50vh',justifyContent:'center'}}>  <CircularProgress /></Box> }
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                  {id==4 ?<Video singleLectureData={singleLectureData} />:<Box sx={{display:'flex',alignItems:'center',height:'50vh',justifyContent:'center'}}>  <CircularProgress /></Box> }
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                  {id==5 ?<Video singleLectureData={singleLectureData} />:<Box sx={{display:'flex',alignItems:'center',height:'50vh',justifyContent:'center'}}>  <CircularProgress /></Box> }
                  </TabPanel>
                  <TabPanel value={value} index={5}>
                    {/* <QuizHome singleLectureData={singleLectureData} /> */}
                    {id==6 ? <QuizStart setIsShow={setIsShow}/>:<Box sx={{display:'flex',alignItems:'center',height:'50vh',justifyContent:'center'}}>  <CircularProgress /></Box> }
                   
                  </TabPanel>
                  <TabPanel value={value} index={6}>
                    Item Seven
                  </TabPanel>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>}
        {/* <TabPanel value={value} index={5}>
          <QuizHome singleLectureData={singleLectureData} />
        </TabPanel> */}
         { isShow &&<QuizHome singleLectureData={singleLectureData} />}
      </Box>
    </div>
  );
};

export default SinglelectureDetails;
