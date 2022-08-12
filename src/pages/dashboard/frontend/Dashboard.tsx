import { Box } from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AccountMenu, MobileMenu } from "../../../shared";
import { Navbar, Sidebar } from "../../../views";
import Data from "../data";

export default function Dashboard() {
  const navigation = useNavigate();
  const [sidebar, setSidebar] = useState<boolean>(true);
  const data = new Data();
  const [accountMenu, setAccountMenu] = useState<HTMLElement | null>(null);
  const [mobileMenu, setMobileMenu] = useState<HTMLElement | null>(null);
  function handleMobileMenu(event: MouseEvent<HTMLButtonElement>) {
    setMobileMenu(event.currentTarget);
  }

  function handleAccountMenu(event: MouseEvent<HTMLButtonElement>) {
    setAccountMenu(event.currentTarget);
  }

  useEffect(() => {
    navigation("orders");
  }, []);

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        padding: 0,
        margin: 0,
      })}
    >
      <Navbar
        isSidebar
        sidebar={sidebar}
        handleSidebar={() => setSidebar(!sidebar)}
        handleMobileMenu={handleMobileMenu}
        handleAccountMenu={handleAccountMenu}
      />
      <AccountMenu
        handleClose={() => setAccountMenu(null)}
        anchorEl={accountMenu}
      />
      <MobileMenu
        anchorEl={mobileMenu}
        handleClose={() => setMobileMenu(null)}
      />
      <Sidebar
        routes={data.DashboardRoutes}
        sidebar={sidebar}
        handleSidebar={() => setSidebar(!sidebar)}
      />
      <Box
        sx={(theme) => ({
          marginTop: "60px",
          paddingLeft: sidebar ? "240px" : "0px",
        })}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
