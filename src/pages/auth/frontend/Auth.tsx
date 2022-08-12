import { Box, Container } from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AccountMenu, MobileMenu } from "../../../shared";
import { Navbar } from "../../../views";
import Data from "../../data/Data";

export default function Auth() {
  const navigation = useNavigate();
  const data = new Data();
  const [accountMenu, setAccountMenu] = useState<HTMLElement | null>(null);
  const [mobileMenu, setMobileMenu] = useState<HTMLElement | null>(null);
  function handleMobileMenu(event: MouseEvent<HTMLButtonElement>) {
    setMobileMenu(event.currentTarget);
  }

  function handleAccountMenu(event: MouseEvent<HTMLButtonElement>) {
    setAccountMenu(event.currentTarget);
  }

  useEffect(() => {}, []);
  return (
    <Box>
      <Navbar
        handleAccountMenu={handleAccountMenu}
        handleMobileMenu={handleMobileMenu}
      />
      <AccountMenu
        anchorEl={accountMenu}
        handleClose={() => setAccountMenu(null)}
      />
      <MobileMenu
        anchorEl={mobileMenu}
        handleClose={() => setMobileMenu(null)}
      />
      <Box
        sx={(theme) => ({
          marginTop: "50px",
          overflow: "hidden",
        })}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
