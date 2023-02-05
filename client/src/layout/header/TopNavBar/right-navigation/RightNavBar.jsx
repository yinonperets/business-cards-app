import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchBar from "./SearchBar";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MoreButton from "./MoreButton";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import MenuBar from "./MenuBar";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import { useMediaQuery } from "@mui/material";
import { useTheme as useMenuItem } from "@mui/material/styles";

const RightNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setMenuStatus] = useState(false);

  const theme = useMenuItem();
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));
  const noop = () => {};
  const { user } = useUser();

  const handleCloseMenu = () => {
    setMenuStatus(false);
    setAnchorEl(false);
  };

  const handleOpenMenu = ({ target }) => {
    setAnchorEl(target);
    setMenuStatus(true);
  };
  const { isDark, toggleDarkMode } = useTheme();

  useEffect(() => {
    handleCloseMenu();
  }, [screenSize]);

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && <NotLogged />}

        {user && <Logged onClick={screenSize ? handleOpenMenu : noop} />}
      </Box>

      <MoreButton onClick={screenSize ? handleOpenMenu : noop} />

      <MenuBar
        isMenuOpen={isMenuOpen}
        anchorEl={anchorEl}
        onCloseMenu={handleCloseMenu}
      />
    </>
  );
};

export default RightNavBar;
