import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CourseOverview = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "554px",
        background: "linear-gradient(90deg, rgb(245, 128, 37), rgb(0, 0, 0))",
        marginTop: "20px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} xl={6}>
            <Item></Item>
          </Grid>
          <Grid item xs={4} xl={6}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CourseOverview;
