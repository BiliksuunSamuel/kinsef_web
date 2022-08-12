import { Grid } from "@mui/material";
import React from "react";
import Data from "../pages/data/Data";
import { ProductView } from "../shared";

interface IProps {
  count: number;
}
export default function ProductsContainer({ count }: IProps) {
  return (
    <Grid
      container
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {Data.getProducts(count).map((product) => (
        <ProductView info={product} key={product.id} />
      ))}
    </Grid>
  );
}
