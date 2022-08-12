import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { BigText } from "../components";

interface IProps {
  title: string;
  children?: ReactNode;
}
export default function SubSectionHeader({ title, children }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        padding: theme.spacing(1),
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: theme.shadows[1],
      })}
    >
      <BigText text={title} />
      {children}
    </Box>
  );
}
