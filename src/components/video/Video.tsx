import { Box } from "@mui/material";
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
            <Item sx={{ marginTop: "30px", boxShadow: "0" }}>
              <ReactPlayer
                width="100%"
                height="500px"
                url={singleLectureData?.resourceVideoLink}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Video;
