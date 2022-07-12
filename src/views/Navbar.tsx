import { ShoppingBasketOutlined } from "@mui/icons-material";
import { AppBar, Badge, Box, Toolbar } from "@mui/material";
import React from "react";

export default function Navbar() {
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
        <Box></Box>
        <Box></Box>
        <Box
          sx={(theme) => ({
            width: "100%",
            padding: theme.spacing(0, 1),
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          })}
        >
          <Badge badgeContent={5}>
            <ShoppingBasketOutlined />
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
