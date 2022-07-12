import { Box, Chip } from "@mui/material";
import React from "react";
import images from "../resources/images";
import BigText from "./BigText";

export default function QuickAccessMenuLink() {
  return (
    <Chip
      sx={(theme) => ({
        borderRadius: theme.spacing(0.25),
        boxShadow: theme.shadows[1],
        margin: theme.spacing(0.5),
      })}
      label={<BigText text="Ladies Sandals" />}
      avatar={
        <Box
          sx={(theme) => ({
            borderRadius: "60px",
            overflow: "hidden",
          })}
        >
          <img src={images.shoe1} />
        </Box>
      }
    />
  );
}
