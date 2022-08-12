import { SxProps, Typography, TypographyProps } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
  styles?: SxProps;
  props?: TypographyProps;
}
export default function SmallText({ text, styles, props }: IProps) {
  return (
    <Typography
      variant="body2"
      sx={(theme) => ({
        ...styles,
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.spacing(1.25),
        },
        [theme.breakpoints.down("md")]: {
          fontSize: theme.spacing(1.5),
        },
      })}
      {...props}
    >
      {text}
    </Typography>
  );
}
