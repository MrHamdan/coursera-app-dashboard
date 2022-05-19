import React from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { styled, alpha } from "@mui/material/styles";

import { InputBase } from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const pages = [
  "Online Degrees",
  "Find your New Career",
  "For Enterprise",
  "For Universities",
];
const settings = [
  "My courses",
  "Profile",
  "My Purchases",
  "Settings",
  "Updates",
  "Accomplishments",
  "Help Center",
  "Log Out",
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "300px",
    [theme.breakpoints.up("sm")]: {
      width: "200px",
      "&:focus": {
        width: "250px",
      },
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MenuNav = () => {
  const [navMenuState, setNavMenuState] = React.useState<boolean>(false);
  const [navSearchState, setNavSearchState] = React.useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event: any) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box>
      <Box sx={{ flexGrow: 1, width: "375px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <Box>
                <PersonOutlineIcon
                  sx={{
                    backgroundColor: "#3BAFDA",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "40px",
                    marginLeft: "10px",
                  }}
                />
              </Box>
              <Typography sx={{ marginLeft: "10px", color: "black" }}>
                Hello, Hamdan!
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
              <Typography sx={{ color: "black" }}>Your Account</Typography>
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
              <Typography sx={{ color: "black" }}>For Enterprise</Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sx={{ borderBottom: "1px solid lightgray" }}>
            <Item
              sx={{
                boxShadow: "0",
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              <Typography sx={{ marginBottom: "10px", color: "black" }}>
                Find your new career
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
          <Grid item xs={10} sx={{ borderBottom: "1px solid lightgray" }}>
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
          <Grid item xs={2} sx={{ borderBottom: "1px solid lightgray" }}>
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
              <Typography sx={{ color: "black" }}>Computer Science</Typography>
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
              <Typography sx={{ color: "black" }}>Language Learning</Typography>
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
              <Typography sx={{ color: "black" }}>Social Science</Typography>
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
          <Grid item xs={10} sx={{ borderBottom: "1px solid lightgray" }}>
            <Item
              sx={{
                boxShadow: "0",
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              <Typography sx={{ color: "black" }}>Math and Logic</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} sx={{ borderBottom: "1px solid lightgray" }}>
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
              <Typography sx={{ marginBottom: "10px", color: "black" }}>
                Help Center
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sx={{ borderBottom: "1px solid lightgray" }}>
            <Item
              sx={{
                boxShadow: "0",
                textAlign: "left",
                marginLeft: "20px",
              }}
            >
              <Typography sx={{ marginBottom: "10px", color: "black" }}>
                For Universities
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MenuNav;
