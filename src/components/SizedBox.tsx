import { Box, BoxProps } from "@mui/material";
import React from "react";

interface IProps {
  width?: number;
  height?: number;
  props?: BoxProps;
}
export default function SizedBox({ width, height, props }: IProps) {
  return (
    <Box
      {...props}
      sx={(theme) => ({
        margin: theme.spacing(height ? height : 0, width ? width : 0),
      })}
    />
  );
}
