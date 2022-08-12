import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
}
export default function AccountMenu({ anchorEl, handleClose }: IProps) {
  const navigation = useNavigate();
  return (
    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl}>
      <MenuItem
        onClick={() => {
          handleClose();
          navigation("/account/login");
        }}
      >
        Login
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          navigation("/account/register");
        }}
      >
        Register
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          navigation("/dashboard");
        }}
      >
        Profile
      </MenuItem>
    </Menu>
  );
}
