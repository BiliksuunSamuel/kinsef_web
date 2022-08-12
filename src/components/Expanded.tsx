import { Box, BoxProps } from "@mui/material";
import React from "react";

interface IProps {
  flex?: number;
  props?: BoxProps;
}
export default function Expanded({ flex, props }: IProps) {
  return (
    <Box
      {...props}
      sx={(theme) => ({
        flex: flex ? flex : 1,
      })}
    />
  );
}
