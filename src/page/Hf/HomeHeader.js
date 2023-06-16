// import React from "react";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["AddPost", "MyPost"];
const settings = ["Profile", "Home", "Logout"];

const HomeHeader = ({ setScreen, screen }) => {
  const userId = localStorage.getItem("user_id") || "";

  const [userDetail, setUserDetail] = React.useState({});
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  React.useEffect(() => {
    if (userId) {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          setUserDetail(data);
        });
    }
  }, [userId]);

  // const logout = () => {
  //   localStorage.removeItem("user_id");
  //   setScreen("LoginPage");
  // };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // header panlenp
  const handleCloseNavMenu = (page) => {
    // setAnchorElNav(null);
    if (page === "Logout") {
      localStorage.clear();
      setScreen("LoginPage");
    }
    if (page === "AddPost") {
      setScreen("AddPost");
    }
    if (page === "MyPost") {
      setScreen("MyPost");
    }
  };

  // manu icon tab
  const handleCloseUserMenu = (page) => {
    setAnchorElUser(null);
    if (page === "Logout") {
      localStorage.clear();
      setScreen("LoginPage");
    }
    if (page === "Profile") {
      setScreen("UserProfile");
    }
    if (page === "Home") {
      setScreen("Home");
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Weebly
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {userId && (
              <>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleCloseNavMenu(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {userId && (
              <>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    style={{ background: "azure" }}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt={userDetail?.firstName}
                      src={userDetail?.image}
                    />
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
                      onClick={() => handleCloseUserMenu(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HomeHeader;
