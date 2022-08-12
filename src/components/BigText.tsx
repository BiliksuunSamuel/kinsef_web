import { SxProps, Typography, TypographyProps } from "@mui/material";
import React from "react";

interface IProps {
  text: string;
  color?: string;
  styles?: SxProps;
  props?: TypographyProps;
}
export default function BigText({ text, styles, props }: IProps) {
  return (
    <Typography
      variant="body1"
      sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.spacing(1.5),
        },
        [theme.breakpoints.down("md")]: {
          fontSize: theme.spacing(2),
        },
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "horizontal",
        WebkitLineClamp: 1,
      })}
      {...props}
    >
      {text}
    </Typography>
  );
}
