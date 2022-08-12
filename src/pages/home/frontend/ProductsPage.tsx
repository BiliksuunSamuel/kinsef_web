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
import Data from "../../data/Data";

export default function ProductsPage() {
  return (
    <Box
      sx={(theme) => ({
        overflowY: "auto",
        height: "100vh",
        paddingBottom: "200px",
      })}
    >
      <Grid
        container
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        {Data.getProducts(30).map((product) => (
          <ProductView info={product} key={product.id} />
        ))}
      </Grid>
    </Box>
  );
}
