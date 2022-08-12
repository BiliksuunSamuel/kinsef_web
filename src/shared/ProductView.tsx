import { AddShoppingCartOutlined, ReadMoreOutlined } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BigText, Expanded, Row, SizedBox, SmallText } from "../components";
import constants from "../constants";
import ProductModel from "../model/ProductModel";
import images from "../resources/images";
import Utils from "../utilities/Utils";

interface IProps {
  info: ProductModel;
}
export default function ProductView({ info }: IProps) {
  const navigation = useNavigate();
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
      sm={5}
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
        <img src={info.image} alt="shoe" />
      </Box>
      <IconButton
        sx={(theme) => ({
          position: "absolute",
          top: 5,
          right: 10,
          background: "#f5f5f5",
        })}
        size="small"
      >
        <AddShoppingCartOutlined fontSize="small" />
      </IconButton>
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
        <BigText
          text={info.name}
          styles={{ overflow: "hidden" }}
          props={{
            lineHeight: "20px",
            sx: (theme) => ({
              width: "100%",
              overflow: "hidden",
              textAlign: "left",
              flex: 1,
              fontSize: theme.spacing(1.85),
            }),
          }}
        />
        <SizedBox height={-0.25} />
        <Row
          children={[
            <SmallText
              props={{
                sx: (theme) => ({
                  fontSize: theme.spacing(1.5),
                }),
              }}
              text={info.cost}
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
            <SizedBox width={0.25} />,
            <IconButton
              onClick={() => navigation("/product/" + Utils.generateId())}
              size="small"
            >
              <ReadMoreOutlined fontSize="small" />
            </IconButton>,
          ]}
        />
      </Box>
    </Grid>
  );
}
