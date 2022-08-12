import {
  CategoryOutlined,
  ListAltOutlined,
  ListAltSharp,
  ListOutlined,
} from "@mui/icons-material";
import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";

interface IProps {
  category: string;
}
export default function ProductCategoryLabel({ category }: IProps) {
  return (
    <Box>
      <Chip
        sx={(theme) => ({
          borderRadius: theme.spacing(0),
          display: "flex",
          flexDirection: "row",
          aligngItems: "center",
          justifyContent: "flex-start",
          padding: theme.spacing(0.5),
          backgroundColor: "transparent",
        })}
        onClick={() => {}}
        label={
          <Typography
            sx={(theme) => ({
              marginLeft: theme.spacing(1),
            })}
            variant="body2"
          >
            {category}
          </Typography>
        }
        avatar={<ListOutlined fontSize="small" />}
      />
      <Divider />
    </Box>
  );
}
