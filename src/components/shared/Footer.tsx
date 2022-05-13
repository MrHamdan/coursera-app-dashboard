import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <Box sx={{ borderTop: "1px solid lightgray" }}>
      <Container maxWidth="xl" sx={{ paddingTop: "44px" }}>
        <Box sx={{ flexGrow: 1, borderBottom: "1px solid lightgray" }}>
          <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
            <Grid item xs={12} xl={3}>
              <Item
                sx={{
                  textAlign: "left",
                  marginLeft: { xl: "24px", xs: "" },
                  boxShadow: "0",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Coursera
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>About</Typography>
                <Typography sx={{ fontSize: "14px" }}>What We Offer</Typography>
                <Typography sx={{ fontSize: "14px" }}>Leadership</Typography>
                <Typography sx={{ fontSize: "14px" }}>Careers</Typography>
                <Typography sx={{ fontSize: "14px" }}>Catalog</Typography>
                <Typography sx={{ fontSize: "14px" }}>Coursera Plus</Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Professional Certificate
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  MasterTrack® Certificates
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>Degrees</Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  For Enterprise
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  For Government
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>For Campus</Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Become a Partner
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Coronavirus Response
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} xl={3}>
              <Item sx={{ textAlign: "left", boxShadow: "0" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Community
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>Learners</Typography>
                <Typography sx={{ fontSize: "14px" }}>Partners</Typography>
                <Typography sx={{ fontSize: "14px" }}>Developers</Typography>
                <Typography sx={{ fontSize: "14px" }}>Beta Testers</Typography>
                <Typography sx={{ fontSize: "14px" }}>Translators</Typography>
                <Typography sx={{ fontSize: "14px" }}>Blog</Typography>
                <Typography sx={{ fontSize: "14px" }}>Tech Blog</Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Teaching Center
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} xl={3}>
              <Item sx={{ textAlign: "left", boxShadow: "0" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  More
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>Press</Typography>
                <Typography sx={{ fontSize: "14px" }}>Investors</Typography>
                <Typography sx={{ fontSize: "14px" }}>Terms</Typography>
                <Typography sx={{ fontSize: "14px" }}>Privacy</Typography>
                <Typography sx={{ fontSize: "14px" }}>Help</Typography>
                <Typography sx={{ fontSize: "14px" }}>Accessibility</Typography>
                <Typography sx={{ fontSize: "14px" }}>Contact</Typography>
                <Typography sx={{ fontSize: "14px" }}>Articles</Typography>
                <Typography sx={{ fontSize: "14px" }}>Directory</Typography>
                <Typography sx={{ fontSize: "14px" }}>Affiliates</Typography>
              </Item>
            </Grid>
            <Grid item xs={12} xl={3}>
              <Item sx={{ textAlign: "left", boxShadow: "0" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                  }}
                >
                  Mobile App
                </Typography>
              </Item>
              <Item sx={{ textAlign: "left", boxShadow: "0" }}>
                <Image
                  src="/assets/images/googleplay.png"
                  width="151.88"
                  height="45"
                  alt="Google Play"
                />
              </Item>
              <Item sx={{ textAlign: "left", boxShadow: "0" }}>
                <Image
                  src="/assets/images/appstore.png"
                  width="151.88"
                  height="45"
                  alt="App Store"
                />
              </Item>
              <Item sx={{ textAlign: "left", boxShadow: "0" }}>
                <Box sx={{ marginLeft: "35px" }}>
                  <Image
                    src="/assets/images/corplogo.png"
                    width="82"
                    height="120"
                    alt="Corp Logo"
                  />
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={8}>
              <Item sx={{ textAlign: "left", boxShadow: "0" }}>
                <Typography
                  sx={{ textAlign: "left", marginLeft: { xl: "25px", xs: "" } }}
                >
                  © 2022 Coursera Inc. All rights reserved.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} xl={4}>
              <Item sx={{ textAlign: "left", boxShadow: "0" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{ marginLeft: { xl: "90px", xs: "-30px" } }}>
                    <Image
                      src="/assets/images/facebook.png"
                      width="28"
                      height="28"
                      alt="facebook"
                    />
                  </Box>
                  <Box sx={{ margin: "0px 20px" }}>
                    <Image
                      src="/assets/images/linkedin.png"
                      width="28"
                      height="28"
                      alt="facebook"
                    />
                  </Box>
                  <Box>
                    <Image
                      src="/assets/images/twitter.png"
                      width="28"
                      height="28"
                      alt="facebook"
                    />
                  </Box>
                  <Box sx={{ margin: "0px 20px" }}>
                    <Image
                      src="/assets/images/youtube.png"
                      width="28"
                      height="28"
                      alt="facebook"
                    />
                  </Box>
                  <Box>
                    <Image
                      src="/assets/images/instagram.png"
                      width="28"
                      height="28"
                      alt="facebook"
                    />
                  </Box>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
