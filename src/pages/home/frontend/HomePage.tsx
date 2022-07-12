import { ShoppingBasketOutlined } from "@mui/icons-material";
import { AppBar, Badge, Box, Container, Toolbar } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import appColors from "../../../constants/appColors";
import images from "../../../resources/images";
import { QuickAccessMenu } from "../../../shared";
import { Navbar } from "../../../views";

export default function HomePage() {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("");
  }, []);
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        height: "100vh",
        alignItems: "center",
      })}
    >
      <Navbar />
      <Box
        sx={(theme) => ({
          marginTop: "50px",
          background: "#f0f0f0",
        })}
      >
        <Box
          sx={(theme) => ({
            height: 400,
            backgroundColor: appColors.primary,
            clipPath: " ellipse(84% 100% at 41.16% 0%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.down("sm")]: {
              height: "45vh",
            },
            overflow: "hidden",
            padding: theme.spacing(2),
          })}
        >
          <Box
            sx={(theme) => ({
              height: "100%",
              width: 400,
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                height: "100%",
              },
              alignSelf: "center",
              borderRadius: "100%",
              overflow: "hidden",
            })}
          >
            <img src={images.shoe1} />
          </Box>
        </Box>
        <QuickAccessMenu />
        <Outlet />
      </Box>
    </Box>
  );
}
