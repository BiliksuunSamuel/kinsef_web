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
import React from "react";
import { CustomTableCell, NoRecordContainer } from "../../../components";
import { FiChevronDown } from "react-icons/fi";
import { PageHeader, TableTemplate } from "../../../views";
import Data from "../data";
import moment from "moment";

export default function Orders() {
  const data = new Data();
  return (
    <Container sx={(theme) => ({})}>
      <PageHeader pageTitle="Orders" />
      {/* <NoRecordContainer Icon={FcEmptyTrash} /> */}

      <Container
        sx={(theme) => ({
          height: "550px",
          width: "100%",
        })}
      >
        <TableTemplate
          header={data.OrderTableHeader.map((head) => (
            <CustomTableCell
              child={head.title}
              key={head.title}
              props={head.props}
            />
          ))}
          body={data.getOrders(1305).map((order, index) => (
            <TableRow
              sx={(theme) => ({
                background: index % 2 === 0 ? "#f5f5f5" : "#f0f0f0",
              })}
              key={order.id}
            >
              <CustomTableCell
                props={{ size: "small" }}
                child={order.customer_name}
              />
              <CustomTableCell
                props={{ size: "small", align: "center" }}
                child={moment(order.date_ordered).format("DD/MM/YYYY")}
              />
              <CustomTableCell
                props={{ size: "small", align: "center" }}
                child={order.cost}
              />
              <CustomTableCell
                props={{ size: "small", align: "center" }}
                child={
                  <IconButton size="small">
                    <FiChevronDown />
                  </IconButton>
                }
              />
            </TableRow>
          ))}
        />
      </Container>
    </Container>
  );
}
