import { ChevronLeftOutlined } from "@mui/icons-material";
import { Box, Divider, Drawer, IconButton, Typography } from "@mui/material";
import React from "react";
import { SidebarLink } from "../components";
import { IDashboardRoute } from "../pages/dashboard/interface";

interface IProps {
  sidebar: boolean;
  handleSidebar: () => void;
  routes: IDashboardRoute[];
}
export default function Sidebar({ sidebar, handleSidebar, routes }: IProps) {
  return (
    <Drawer open={sidebar} variant="persistent">
      <Box
        sx={(theme) => ({
          width: "240px",
          backgroundColor: "#f0f0f0",
          height: "100%",
        })}
      >
        <Box
          sx={(theme) => ({
            height: "50px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: theme.spacing(0, 1),
          })}
        >
          <Box>
            <Typography
              sx={(theme) => ({
                fontSize: theme.spacing(3.5),
                color: "rgb(240,240,240)",
              })}
              variant="body1"
              className="ghost_shadow"
            >
              Kinsef
            </Typography>
          </Box>
          <IconButton onClick={handleSidebar} size="small">
            <ChevronLeftOutlined fontSize="medium" />
          </IconButton>
        </Box>
        <Divider />
        <Box>
          {routes.map((route) => (
            <SidebarLink info={route} key={route.title} />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}
