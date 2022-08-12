import { Box, Container, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { BigText, NoRecordContainer, SizedBox } from "../components";
import { FcEmptyTrash, FcReading } from "react-icons/fc";

interface IProps {
  pageTitle: string;
  children?: ReactNode;
}
export default function PageHeader({ pageTitle, children }: IProps) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(1),
        boxShadow: theme.shadows[1],
        borderRadius: 0,
        margin: theme.spacing(1, 0),
      })}
    >
      <Box
        sx={(theme) => ({
          padding: theme.spacing(0, 1),
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        })}
      >
        <FcReading size={24} />
        <SizedBox width={0.5} />
        <BigText
          text={pageTitle}
          props={{
            sx: (theme) => ({
              fontSize: theme.spacing(2),
            }),
            textTransform: "capitalize",
          }}
        />
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: theme.spacing(0, 1),
        })}
      >
        {children}
      </Box>
    </Box>
  );
}
