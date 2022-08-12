import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";
import { IDashboardRoute } from "../pages/dashboard/interface";

interface IProps {
  info: IDashboardRoute;
}
export default function SidebarLink({ info }: IProps) {
  return (
    <Box>
      <Chip
        sx={(theme) => ({
          width: "100%",
          background: "transparent",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: 0,
        })}
        label={
          <Typography
            sx={(theme) => ({
              paddingLeft: theme.spacing(1),
            })}
            variant="body2"
          >
            {info.title}
          </Typography>
        }
        avatar={<info.Icon size={info.iconSize ? info.iconSize : "8px"} />}
        onClick={() => {}}
      />
      <Divider />
    </Box>
  );
}
