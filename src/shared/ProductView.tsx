import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import { BigText, Expanded, Row, SizedBox, SmallText } from "../components";
import constants from "../constants";
import images from "../resources/images";

export default function ProductView() {
  return (
    <Grid
      sx={(theme) => ({
        margin: theme.spacing(2, 1),
        boxShadow: theme.shadows[1],
        position: "relative",
        borderRadius: theme.spacing(0.5),
        height: 200,
      })}
      item
      sm={4}
      xs={5}
      md={3}
      lg={2}
      xl={1}
    >
      <Box
        sx={(theme) => ({
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: theme.spacing(0.5),
        })}
      >
        <img src={images.shoe4} alt="shoe" />
      </Box>
      <Box
        sx={(theme) => ({
          width: "90%",
          borderRadius: theme.spacing(0.5),
          boxShadow: theme.shadows[1],
          padding: theme.spacing(0.25, 1),
          zIndex: 101,
          minHeight: "50px",
          position: "absolute",
          bottom: "-20px",
          left: "5%",
          background: theme.palette.common.white,
          alignSelf: "center",
        })}
      >
        <BigText text="Product Name" styles={{ overflow: "hidden" }} />
        <SizedBox height={-0.25} />
        <Row
          children={[
            <SmallText
              text={`${constants.currency}200`}
              styles={{ fontWeight: "bold" }}
            />,
            <SizedBox width={0.5} />,
            <SmallText
              text={`${constants.currency}250`}
              styles={{
                color: "rgba(0,0,0,0.85)",
                textDecoration: "line-through",
              }}
            />,
            <Expanded />,
            <IconButton size="small">
              <AddShoppingCartOutlined fontSize="small" />
            </IconButton>,
          ]}
        />
      </Box>
    </Grid>
  );
}
