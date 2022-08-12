import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Store() {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("checkout");
  }, []);
  return (
    <Box>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}
