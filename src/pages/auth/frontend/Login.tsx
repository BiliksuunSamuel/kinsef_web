import { Box, Container, Typography } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import { CustomButton, CustomInput, SizedBox } from "../../../components";
import images from "../../../resources/images";

export default function Login() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        overflow: "hidden",
      })}
    >
      <Box
        sx={(theme) => ({
          height: "300px",
          backgroundColor: "#f5f5f5",
          clipPath: "ellipse(63% 100% at 46.1% 0%)",
          with: "100%",
          boxShadow: theme.shadows[1],
          backgroundImage: `linear-gradient(180deg,#f0f0f0,rgba(0,0,0,0.45)),url(${images.ecommerce})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <Container
          sx={(theme) => ({
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "48px",
              fontWeight: "bold",
              textTransform: "uppercase",
            })}
            variant="body1"
            className="shadow_caption"
          >
            Kinsef shopping center
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: "36px",
            })}
            variant="body1"
            className="shadow_caption"
          >
            Welcome
          </Typography>
        </Container>
      </Box>
      <Container
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        })}
      >
        <Box
          sx={(theme) => ({
            width: "400px",
            padding: theme.spacing(3),
            alignSelf: "center",
            [theme.breakpoints.down("sm")]: {
              width: "90%",
            },
            borderRadius: theme.spacing(0.5),
            boxShadow: theme.shadows[2],
            marginTop: "-30px",
            zIndex: 2020,
            background: theme.palette.common.white,
            height: "200px",
            borderStyle: "none",
            marginBottom: theme.spacing(1),
          })}
        >
          <CustomInput
            label="Email Address"
            props={{
              variant: "outlined",
              size: "small",
              fullWidth: true,
              type: "email",
              name: "email",
            }}
          />
          <SizedBox height={1} />
          <CustomInput
            label="Password"
            props={{
              variant: "outlined",
              size: "small",
              fullWidth: true,
              type: "password",
              name: "password",
            }}
          />
          <SizedBox height={1} />
          <CustomButton
            title="Submit"
            props={{
              variant: "contained",
              size: "small",
              color: "primary",
              fullWidth: true,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
