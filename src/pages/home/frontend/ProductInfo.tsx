import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { BigText, Expanded, SizedBox, SmallText } from "../../../components";
import { ProductsContainer, SubSectionHeader } from "../../../views";
import Data from "../../data/Data";

export default function ProductInfo() {
  const info = Data.getProductInfo();
  return (
    <Box
      sx={(theme) => ({
        height: "100vh",
        overflowY: "auto",
        marginTop: theme.spacing(2),
        paddingBottom: "200px",
      })}
    >
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(0, 1),
          margin: theme.spacing(1, 0),
        })}
      >
        <BigText props={{ fontWeight: "bold" }} text={info.name} />
        <Expanded />
        <BigText
          text={info.cost}
          props={{
            sx: (theme) => ({
              fontsize: theme.spacing(2),
              fontWeight: "bold",
              color: "coral",
            }),
          }}
        />
        <SizedBox width={1} />
        <IconButton size="small">
          <AddShoppingCartOutlined />
        </IconButton>
      </Box>
      <Divider />
      <SmallText
        text="Description"
        props={{
          sx: (theme) => ({
            fontSize: theme.spacing(2),
            padding: theme.spacing(1),
          }),
        }}
      />
      <Box>
        {info.description.split(",").map((des) => (
          <Typography
            sx={(theme) => ({
              padding: theme.spacing(1),
              textAlign: "justify",
              lineHeight: "5px",
            })}
            variant="body2"
          >
            {des}
          </Typography>
        ))}
      </Box>
      <Divider />
      <SubSectionHeader title="Related Products" />
      <ProductsContainer count={8} />
    </Box>
  );
}
