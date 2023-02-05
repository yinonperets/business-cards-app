import React from "react";
import Box from "@mui/material/Box";
import NavItem from "../../../../routes/NavItem";
import ROUTES from "../../../../routes/routesModel";

const NotLogged = () => {
  return (
    <Box>
      <NavItem to={ROUTES.SIGNUP} label='signup' />
      <NavItem to={ROUTES.LOGIN} label='login' />
    </Box>
  );
};

export default NotLogged;
