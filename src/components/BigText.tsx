import { SxProps, Typography } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
  color?: string;
  styles?: SxProps;
}
export default function BigText({ text, styles }: IProps) {
  return (
    <Typography
      variant="body1"
      sx={(theme) => ({
        ...styles,
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.spacing(1.5),
        },
        [theme.breakpoints.down("md")]: {
          fontSize: theme.spacing(2),
        },
      })}
    >
      {text}
    </Typography>
  );
}
