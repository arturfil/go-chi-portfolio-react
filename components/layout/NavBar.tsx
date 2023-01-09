import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const pages = [
  { title: "Home", route: "/" },
  { title: "Projects", route: "/projects" },
  { title: "About", route: "/about" },
];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (e: MouseEvent<HTMLElement>) =>
    setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e: MouseEvent<HTMLElement>) =>
    setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar className="navbar" elevation={0} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            fontWeight={'bold'}
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "black" }}
          >
            Arturo Filio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              sx={{color: 'black'}}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "bottom", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Link key={page.title} href={page.route}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      fontWeight: "bold",
                    }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{color: "black", fontWeight: "bold", flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Arturo Filio
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Link key={page.title} href={page.route}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    mx: 4,
                    my: 2,
                    color: "black",
                    display: "flex",
                    fontWeight: 600,
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
            {/* <Button
              LinkComponent={Link}
              href="/login"
              className="button"
              sx={{backgroundColor: "blue", my: 2, mx: 8, color: "white", width: "100px"}}
            >
              Login
            </Button>
            <Button
              className="button"
              sx={{backgroundColor: "blue", my: 2, color: "white", width: "100px"}}
            >
              Signup
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
