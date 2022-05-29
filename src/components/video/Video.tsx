import { Box, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { LectureResource } from "datatypes/coursetypes";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type Props = {
  singleLectureData: LectureResource;
}

const Video = ({ singleLectureData }: Props) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} xl={12} md={12}>
            <Item sx={{ marginTop: "0px", boxShadow: "0" }}>
              <Typography sx={{textAlign: "left", fontSize:'40px'}}>{singleLectureData.resourceTitle}</Typography>
              <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
              <ReactPlayer
                width="100%"
                height="500px"
                url={singleLectureData?.resourceVideoLink}
              />
            </Item>
          </Grid>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={10}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={10}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
    </Box>
    
        </Grid>
      </Box>
    </div>
  );
};
export default Video;
