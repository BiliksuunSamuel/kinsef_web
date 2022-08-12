import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface IProps {
  props?: ButtonProps;
  title: string;
  handleClick?: () => void;
}
export default function CustomButton({ title, props, handleClick }: IProps) {
  return (
    <Button onClick={handleClick} {...props}>
      {title}
    </Button>
  );
}
