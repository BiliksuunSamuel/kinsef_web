import { SvgIconTypeMap, SxProps, TableCellProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { AlignPropertyParams } from "@mui/material/styles/cssUtils";
import { CSSProperties } from "react";
import { IconType } from "react-icons";

export interface IDashboardRoute {
  route?: string;
  title: string;
  Icon: IconType;
  iconSize?: number | string;
}

export interface IOrderTableHeader {
  title: string;
  padding?: number;
  props?: TableCellProps;
}
