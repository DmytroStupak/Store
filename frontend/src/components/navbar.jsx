import React, { useContext } from "react";
import { AppStoreContext } from "../App";
import { observer } from "mobx-react";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import LoginStore from "../pages/Login/LoginStore";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const appStore = useContext(AppStoreContext);
  const store = new LoginStore(appStore.authStore);

  const [user, setUser] = useState(null);

  React.useEffect(() => {
    store.authStore.mgr.getUser().then(function (user) {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        console.log("User not logged in");
      }
    });
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logOut = () => store.logout();
  const login = () => store.login();

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            MULTITOOL.UA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              <Link
                key="home"
                component={NavLink}
                to="/"
                color="black"
                underline="none"
                variant="button"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>

              <Link
                key="products"
                component={NavLink}
                to="/products"
                color="black"
                underline="none"
                variant="button"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Product</Typography>
                </MenuItem>
              </Link>

              <Link
                key="about"
                component={NavLink}
                to="/about"
                color="black"
                underline="none"
                variant="button"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            MULTITOOL.UA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "1rem",
              }}
            >
              <Link
                key="home"
                component={NavLink}
                to="/"
                color="black"
                underline="none"
                variant="button"
                sx={{ fontSize: "large", marginLeft: "2rem" }}
              >
                Home
              </Link>
              <Link
                key="products"
                component={NavLink}
                to="/products"
                color="black"
                underline="none"
                variant="button"
                sx={{ fontSize: "large", marginLeft: "2rem" }}
              >
                Products
              </Link>
              <Link
                key="about"
                component={NavLink}
                to="/about"
                color="black"
                underline="none"
                variant="button"
                sx={{ fontSize: "large", marginLeft: "2rem" }}
              >
                About
              </Link>
            </Box>
          </Box>
          {(!!user && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "right",
                marginLeft: "1rem",
              }}
            >
              <Box sx={{ paddingTop: "6px", fontSize: "1.3rem" }}>
                {user.profile.name}
              </Box>
              <Button
                key="logout"
                onClick={logOut}
                color="black"
                underline="none"
                variant="button"
                sx={{
                  fontSize: "large",
                  marginLeft: "2rem",
                }}
              >
                Sign out
              </Button>
            </Box>
          )) || (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "right",
                marginLeft: "1rem",
              }}
            >
              <Link
                key="login"
                component={NavLink}
                to={`/listusers`}
                onClick={(event) => {
                  login();
                }}
                color="black"
                underline="none"
                variant="button"
                align="right"
                sx={{
                  fontSize: "large",
                  marginLeft: "2rem",
                }}
              >
                Log in
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </Box>
  );
}

export default observer(Navbar);
