import { ShoppingBasketOutlined } from "@mui/icons-material";
import { AppBar, Badge, Box, Container, Divider, Toolbar } from "@mui/material";
import React, { MouseEvent, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CustomInput, ProductCategoryLabel } from "../../../components";
import appColors from "../../../constants/appColors";
import images from "../../../resources/images";
import { AccountMenu, QuickAccessMenu, MobileMenu } from "../../../shared";
import { Navbar, SideCategoryView } from "../../../views";
import Data from "../../data/Data";

export default function HomePage() {
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
  useEffect(() => {
    navigation("");
  }, []);
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        overflow: "hidden",
      })}
    >
      <AccountMenu
        anchorEl={accountMenu}
        handleClose={() => setAccountMenu(null)}
      />
      <SideCategoryView />
      <Box
        sx={(theme) => ({
          height: "100vh",
          flex: 1,
        })}
      >
        <Navbar
          handleAccountMenu={handleAccountMenu}
          handleMobileMenu={handleMobileMenu}
        />
        <Box
          sx={(theme) => ({
            marginTop: "50px",
          })}
        >
          <Box
            sx={(theme) => ({
              padding: theme.spacing(1),
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              boxShadow: theme.shadows[1],
              zIndex: 2019,
            })}
          >
            <CustomInput
              props={{ variant: "standard", placeholder: "search.." }}
              label=""
            />
          </Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
