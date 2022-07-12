import { Box, Chip, Container, Typography } from "@mui/material";
import React from "react";
import { BigText, QuickAccessMenuLink } from "../components";
import images from "../resources/images";

export default function QuickAccessMenu() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(1),
        borderRadius: 0,
        borderBottom: "1px solid rgb(211,211,211)",
      })}
    >
      <Container
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          [theme.breakpoints.down("sm")]: {
            overflowX: "auto",
          },
        })}
      >
        {[1, 2, 3, 4].map((index) => (
          <QuickAccessMenuLink key={index.toString()} />
        ))}
      </Container>
    </Box>
  );
}
