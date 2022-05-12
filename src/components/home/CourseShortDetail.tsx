import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const CourseShortDetail = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={2}>
          <Item>
            <CalendarMonthIcon
              sx={{
                border: "1px solid lightgray",
                borderRadius: "50%",
                fontSize: "34px",
                padding: "5px",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Typography sx={{ textAlign: "left" }}>
              Flexible deadlines <br />
              Reset deadlines in accordance to your schedule.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <LanguageIcon
              sx={{
                border: "1px solid lightgray",
                borderRadius: "50%",
                fontSize: "34px",
                padding: "5px",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Typography sx={{ textAlign: "left" }}>
              100% online <br />
              Start instantly and learn at your own schedule.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <SignalCellularAltIcon
              sx={{
                border: "1px solid lightgray",
                borderRadius: "50%",
                fontSize: "34px",
                padding: "5px",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Typography sx={{ textAlign: "left" }}>Beginner Level</Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <AccessTimeIcon
              sx={{
                border: "1px solid lightgray",
                borderRadius: "50%",
                fontSize: "34px",
                padding: "5px",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Typography sx={{ textAlign: "left" }}>
              Approx. 88 hours to complete
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
            <AccessTimeIcon
              sx={{
                border: "1px solid lightgray",
                borderRadius: "50%",
                fontSize: "34px",
                padding: "5px",
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <Typography sx={{ textAlign: "left" }}>
              English <br />
              <Typography sx={{ fontSize: "14px" }}>
                Subtitles: Arabic, French, Portuguese (European), Italian,
                Vietnamese, German, Russian, English, Spanish
              </Typography>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseShortDetail;