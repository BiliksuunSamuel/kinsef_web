import { AddShoppingCartOutlined, StarOutline } from "@mui/icons-material";
import { Box, Container, Grid, IconButton } from "@mui/material";
import React from "react";
import {
  BigText,
  Expanded,
  Row,
  SizedBox,
  SmallText,
} from "../../../components";
import constants from "../../../constants";
import images from "../../../resources/images";
import { ProductView } from "../../../shared";

export default function ProductsPage() {
  return (
    <Box>
      <Grid
        container
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
          <ProductView key={index.toString()} />
        ))}
      </Grid>
    </Box>
  );
}
