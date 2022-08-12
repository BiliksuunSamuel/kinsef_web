import { Box, Divider } from "@mui/material";
import React from "react";
import { ProductCategoryLabel } from "../components";
import Data from "../pages/data/Data";

export default function SideCategoryView() {
  return (
    <Box
      sx={(theme) => ({
        width: "240px",
        height: "100vh",
        background: "#f0f0f0",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        marginTop: "60px",
      })}
    >
      <Box
        sx={(theme) => ({
          width: "100%",
          height: "50px",
          padding: theme.spacing(0.5, 1),
        })}
      ></Box>
      <Divider />
      <Box></Box>
      <Box
        sx={(theme) => ({
          height: "100vh",
          width: "100%",
          padding: theme.spacing(0.5),
          overflowX: "hidden",
          overflowY: "auto",
        })}
      >
        {Data.getCategory().map((cate) => (
          <ProductCategoryLabel category={cate} key={cate} />
        ))}
      </Box>
    </Box>
  );
}
