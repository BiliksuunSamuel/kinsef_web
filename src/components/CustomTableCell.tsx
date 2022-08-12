import { TableCell, TableCellProps } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  props?: TableCellProps;
  child: string | ReactNode;
}
export default function CustomTableCell({ child, props }: IProps) {
  return <TableCell {...props}>{child}</TableCell>;
}
