import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Image from "next/image";
import { Drawer, InputBase, TextField } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloseIcon from "@mui/icons-material/Close";

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

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "200px",
      "&:focus": {
        width: "250px",
      },
    },
  },
}));

const Navbar = () => {
  const [navMenuState, setNavMenuState] = React.useState<boolean>(false);
  const [navSearchState, setNavSearchState] = React.useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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
    <AppBar
      sx={{
        backgroundColor: "transparent",
        position: "static",
        boxShadow: "0",
      }}
    >
      <Box sx={{ margin: "0px 20px" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              src="/assets/images/courseralogo.svg"
              width="127px"
              height="32px"
              alt="Courseralogo"
            />
            <Button
              sx={{
                marginLeft: "20px",
                backgroundColor: "#0056d2",
                color: "white",
              }}
            >
              Explore
            </Button>
          </Typography>
          <Search
            sx={{
              border: "1px solid black",
              display: { xs: "none", xl: "block", md: "block" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StyledInputBase
                placeholder="What do you want to learn?"
                inputProps={{ "aria-label": "search" }}
                sx={{ color: "black" }}
              />
              <SearchIcon
                sx={{ backgroundColor: "#0056d2", fontSize: "40px" }}
              />
            </Box>
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setNavMenuState(true)}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Drawer
              anchor="left"
              open={navMenuState}
              onClose={() => setNavMenuState(false)}
            >
              <Box
                sx={{
                  width: 380,
                  bgcolor: "white",
                  height: "100vh",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ marginTop: "20px" }}>
                  <Image
                    src="/assets/images/courseralogo.svg"
                    width="127px"
                    height="32px"
                    alt="Courseralogo"
                  />
                </Box>

                <Box>
                  <CloseIcon
                    onClick={() => setNavMenuState(false)}
                    sx={{ position: "absolute", left: "340px", top: "22px" }}
                  />
                </Box>
              </Box>
            </Drawer>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              src="/assets/images/courseralogo.svg"
              width="127px"
              height="32px"
              alt="Courseralogo"
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "right" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "none",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <NotificationsNoneIcon
            sx={{
              color: "black",
              display: {
                xs: "none",
                xl: "block",
                marginRight: "10px",
                md: "block",
              },
            }}
          />
          <Box
            sx={{
              flexGrow: 0,
              borderLeft: "1px solid lightgray",
              display: { xs: "none", xl: "block" },
            }}
          >
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, backgroundColor: "", borderRadius: "0px" }}
              >
                <PersonOutlineIcon
                  sx={{
                    backgroundColor: "#3BAFDA",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "40px",
                    marginLeft: "10px",
                  }}
                />
                <Typography sx={{ marginLeft: "10px" }}>
                  Hamdan Ahmed
                </Typography>
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ width: "300px" }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button
            sx={{ display: { xs: "block", lg: "none" } }}
            onClick={() => setNavSearchState(true)}
          >
            <SearchIcon
              sx={{
                color: "gray",
                fontSize: "40px",
                display: { xs: "block", xl: "none" },
              }}
            />
          </Button>
          <Drawer
            anchor="top"
            open={navSearchState}
            onClose={() => setNavSearchState(false)}
          >
            <Box
              sx={{
                width: 380,
                bgcolor: "white",
                height: "100vh",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ marginTop: "20px" }}>
                <Image
                  src="/assets/images/courseralogo.svg"
                  width="127px"
                  height="32px"
                  alt="Courseralogo"
                />
              </Box>

              <Box>
                <CloseIcon
                  onClick={() => setNavSearchState(false)}
                  sx={{ position: "absolute", left: "340px", top: "22px" }}
                />
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;
