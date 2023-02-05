import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../routes/NavItem";
import { Outlet } from "react-router-dom";
import { useUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/routesModel";

function SandBox() {
  const { user } = useUser();

  if (!user || !user.isAdmin) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="logic" label="Logic" sx={{ color: "#333" }} />
          <NavItem
            to="life-cycle"
            label="Life Cycle Hooks"
            sx={{ color: "#333" }}
          />
          <NavItem
            to="custom-counter-hook"
            label="Custom Counter Hook"
            sx={{ color: "#333" }}
          />
          <NavItem
            to="custom-name-hook"
            label="Custom Name Hook"
            sx={{ color: "#333" }}
          />
          <NavItem to="context" label="context" sx={{ color: "#333" }} />
          <NavItem to="forms" label="FormTest" sx={{ color: "#333" }} />
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}

export default SandBox;
