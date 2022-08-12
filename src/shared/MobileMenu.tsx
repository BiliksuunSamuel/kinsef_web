import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Data from "../pages/data/Data";

interface IProps {
  handleClose: () => void;
  anchorEl: HTMLElement | null;
}
export default function MobileMenu({ handleClose, anchorEl }: IProps) {
  const navigation = useNavigate();
  return (
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl}>
      {Data.navbarLinks.map((link) => (
        <MenuItem
          onClick={() => {
            handleClose();
            navigation(link.route ? link.route : "");
          }}
        >
          {link.title}
        </MenuItem>
      ))}
    </Menu>
  );
}
