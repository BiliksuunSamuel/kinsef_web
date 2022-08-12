import { TextField, TextFieldProps } from "@mui/material";
import React, { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  label: string;
  props?: TextFieldProps;
}
export default function CustomInput({ label, children, props }: IProps) {
  return (
    <TextField label={label} {...props}>
      {children}
    </TextField>
  );
}
