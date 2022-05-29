import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { LectureResource } from "datatypes/coursetypes";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type Props = {
  singleLectureData: LectureResource
}

const Html = ({ singleLectureData }: Props) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={12} md={12}>
            <Item sx={{ marginTop: "50px", boxShadow: "0" }}>
              <Typography
                sx={{ fontSize: { xl: "40px", xs: "20px" }, textAlign: "left" }}
              >
                {singleLectureData.resourceTitle}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <Item sx={{ marginTop: "80px", boxShadow: "0" }}>
              <Typography
                sx={{ fontSize: { xl: "40px", xs: "20px" }, textAlign: "left" }}
              >
                Lecture Supplements
              </Typography>
              <Box sx={{ border: "3px solid #D0E3D4" }}></Box>
              <Box sx={{ border: "2px solid black" }}></Box>
            </Item>
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <Item sx={{ marginTop: "40px", boxShadow: "0" }}>
              <Typography sx={{ fontSize: "16px", textAlign: "left" }}>
                This lecture is based on Sections 1.1 and 1.2 (pages 1–49) in
                Computer Science: An Interdisciplinary Approach and <br />
                these online materials. Here are the lecture slides.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} xl={12} md={12}>
            <Item sx={{ boxShadow: "0", marginTop: "40px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <DoneIcon sx={{ color: "#1F8354", fontSize: "40px" }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      textAlign: "left",
                      color: "#1F8354",
                      fontWeight: "bold",
                    }}
                  >
                    Completed
                  </Typography>
                </Box>
                <Box sx={{ marginLeft: "30px" }}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#0056D2 !important",
                      width: "169.27px",
                      height: "48px",
                      fontWeight: "bold",
                    }}
                  >
                    Go to next item
                  </Button>
                </Box>
              </Box>
            </Item>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{marginTop:'30px', borderTop: '1px solid lightgray'}}>
        <Grid item xs={2}>
          <Item sx={{boxShadow: "0" }}>
            <Box sx={{display:'flex'}}>
              <Box>
                  <ThumbUpOffAltIcon sx={{color:'#0056D2'}}/>
              </Box>
              <Box>
                <Typography sx={{color:'#0056D2', marginLeft: "10px" }}>
                  Like
                </Typography>
              </Box>
            </Box>

          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{boxShadow: "0" }}>
          <Box sx={{display:'flex'}}>
              <Box>
                  <ThumbDownOffAltIcon sx={{color:'#0056D2'}}/>
              </Box>
              <Box>
                <Typography sx={{color:'#0056D2', marginLeft: "10px"}}>
                  Dislike
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{boxShadow: "0" }}>
          <Box sx={{display:'flex'}}>
              <Box>
                  <OutlinedFlagIcon sx={{color:'#0056D2'}}/>
              </Box>
              <Box>
                <Typography sx={{color:'#0056D2', marginLeft: "10px"}}>
                  Report an Issue
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Html;
