import { Container } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
          About
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
