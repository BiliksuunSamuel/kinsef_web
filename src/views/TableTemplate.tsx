import React, { ReactNode } from "react";
import {
  Box,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { CustomTableCell } from "../components";

interface IProps {
  header: ReactNode;
  body: ReactNode;
}
export default function TableTemplate({ header, body }: IProps) {
  return (
    <TableContainer
      component={Paper}
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        // overflow: "hidden",
        paddingBottom: theme.spacing(5),
      })}
      elevation={2}
    >
      <Table
        sx={(theme) => ({
          flex: 1,
          height: "100%",
          width: "100%",
        })}
      >
        <TableHead
          sx={(theme) => ({
            position: "sticky",
            top: 0,
            background: "#fff",
            zIndex: 2030,
            boxShadow: theme.shadows[1],
          })}
        >
          {header}
        </TableHead>
        <>
          <TableBody
            sx={(theme) => ({
              overflowY: "scroll",
              width: "100%",
              height: "100%",
            })}
          >
            {body}
          </TableBody>
        </>
      </Table>
    </TableContainer>
  );
}
