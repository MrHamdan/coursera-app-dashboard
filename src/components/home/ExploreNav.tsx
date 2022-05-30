import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ExploreNav = () => {
  return (
    <div>
      <Box>
        <Box sx={{ width: "450px", height: "650px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>
                    Goals
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                    "&:hover": {
                      backgroundColor: "#F5F7F8",
                    },
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Take a free course
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>Earn a Degree</Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Earn a Certificate
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Advanced your career
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>
                    Subjects
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>Data Science</Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>Business</Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Computer Science
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Information Technology
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Language Learning
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>Health</Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Personal Development
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Physical Science & Engineering
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Social Science
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Arts and Humanities
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Typography sx={{ color: "black" }}>
                    Math and Logic
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: "0" }}>
                  <Box>
                    <ArrowForwardIosIcon />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item
                  sx={{
                    boxShadow: "0",
                    textAlign: "left",
                    marginLeft: "20px",
                  }}
                >
                  <Button variant="outlined">Browse All Subjects</Button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ExploreNav;
