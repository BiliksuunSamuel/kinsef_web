import { Box, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { IconType } from "react-icons";
import SizedBox from "./SizedBox";

interface IProps {
  Icon: IconType;
}
export default function NoRecordContainer({ Icon }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        alignSelf: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2),
      })}
    >
      <Icon size={150} />
      <SizedBox height={1} />
      <Typography
        sx={(theme) => ({
          fontSize: "24px",
          textAlign: "center",
          width: "100%",
          fontWeight: "bold",
          color: theme.palette.error.dark,
        })}
        variant="body1"
      >
        No Records !!!
      </Typography>
    </Box>
  );
}
