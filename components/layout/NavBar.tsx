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
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { logOut } from "../../features/account/accountSlice";

const pages = [
  { title: "Home", route: "/" },
  { title: "Projects", route: "/projects" },
  { title: "About", route: "/about" },
];

export default function NavBar() {
  const dispatch = useAppDispatch();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const {isLoggedIn} = useAppSelector(state => state.account);

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
              {isLoggedIn && (
                <Link href={`/projects/create`}>
                  <Button onClick={handleCloseNavMenu} 
                    sx={{my: 2, color: "black", display: "block",fontWeight: "bold"}}
                  >
                      Create Project
                  </Button>
                </Link>
              )}
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
                    textTransform: "capitalize",
                    fontWeight: 600,
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
            {isLoggedIn && (
              <>
                <Link href={`/projects/create`}>
                  <Button onClick={handleCloseNavMenu} 
                    sx={{my: 2, mx: 4, color: "black", display: "block",fontWeight: "bold", textTransform: "capitalize"}}
                  >
                      Create Project
                  </Button>
                </Link>
                <Button className="button" onClick={() => dispatch(logOut())} 
                sx={{my: 2, color: "black", display: "block",fontWeight: "bold", textTransform: "capitalize"}}
                >
                    Log Out
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
