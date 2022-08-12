import { Button, ButtonProps } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { INavbarLink } from "../pages/interface";

interface IProps {
  info: INavbarLink;
  props?: ButtonProps;
}
export default function NavbarLink({ info, props }: IProps) {
  const navigation = useNavigate();
  return (
    <Button
      onClick={() => navigation(info.route ? info.route : "")}
      size="small"
      variant="text"
      {...props}
    >
      {info.title}
    </Button>
  );
}
