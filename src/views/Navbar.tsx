import {
  AccountCircleOutlined,
  Menu,
  MoreVert,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarLink, SizedBox } from "../components";
import Data from "../pages/data/Data";
import images from "../resources/images";

interface IProps {
  handleMobileMenu: (event: MouseEvent<HTMLButtonElement>) => void;
  handleAccountMenu: (event: MouseEvent<HTMLButtonElement>) => void;
  sidebar?: boolean;
  handleSidebar?: () => void;
  isSidebar?: boolean;
}
export default function Navbar({
  handleMobileMenu,
  handleAccountMenu,
  sidebar,
  handleSidebar,
  isSidebar,
}: IProps) {
  const navigation = useNavigate();
  return (
    <AppBar
      color="primary"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        boxShadow: theme.shadows[1],
        background: "#f1f1f1",
        paddingLeft: sidebar ? "240px" : "0px",
      })}
      position="fixed"
    >
      <Toolbar
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        })}
      >
        <Box
          sx={(theme) => ({
            width: 150,
          })}
        >
          <img src={images.uenrLogo} />
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: theme.spacing(0, 1),
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          })}
        >
          {Data.navbarLinks.map((link) => (
            <NavbarLink
              props={{
                sx: (theme) => ({
                  textTransform: "none",
                  color: theme.palette.common.black,
                }),
              }}
              info={link}
              key={link.title}
            />
          ))}
        </Box>
        <Box
          sx={(theme) => ({
            padding: theme.spacing(0, 1),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          })}
        >
          <IconButton onClick={() => navigation("/store")} size="small">
            <Badge color="primary" badgeContent={5}>
              <ShoppingBasketOutlined />
            </Badge>
          </IconButton>
          <SizedBox width={1} />
          <IconButton onClick={handleAccountMenu} size="small">
            <AccountCircleOutlined />
          </IconButton>
          <SizedBox width={1} />
          <IconButton
            sx={(theme) => ({
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            })}
            onClick={handleMobileMenu}
            size="small"
          >
            <MoreVert />
          </IconButton>
          {Boolean(isSidebar && !sidebar) && (
            <>
              <SizedBox width={0.5} />
              <IconButton onClick={handleSidebar}>
                <Menu />
              </IconButton>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
