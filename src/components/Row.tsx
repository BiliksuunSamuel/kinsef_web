import { Box, BoxProps } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode[];
  padding?: { x: number; y: number };
  props?: BoxProps;
}
export default function Row({ children, padding, props }: IProps) {
  return (
    <Box
      {...props}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(
          padding ? padding.y : 0,
          padding ? padding.x : 0
        ),
      })}
    >
      {children?.map((child) => child)}
    </Box>
  );
}
