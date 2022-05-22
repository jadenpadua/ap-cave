import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Typed from "react-typed";
import { Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { LIGHT_BLACK_HEX, LIGHT_WEIGHT } from "../../constants/styles";

/**
 * @description: Initial landing page home component of app
 */
const Home = (): React.CElement<any, any> => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "no-wrap",
          marginTop: "10vh",
          height: "10vh",
          width: 500,
          opacity: 0.9,
          backgroundColor: LIGHT_BLACK_HEX,
          borderRadius: "2%",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mr: 2,
            fontWeight: LIGHT_WEIGHT,
            letterSpacing: ".2rem",
            color: "white",
            display: "flex",
            flexWrap: "no-wrap",
            textDecoration: "none",
          }}
        >
          <Typed
            strings={["Let's Jam!", "Check out my tracks!", "Let's Connect!"]}
            typeSpeed={80}
            backDelay={1000}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
      <Button
        style={{
          backgroundColor: LIGHT_BLACK_HEX,
          color: "white",
          marginTop: "20vh",
          fontSize: "1.5em",
          fontWeight: LIGHT_WEIGHT,
          letterSpacing: ".3rem",
          width: 200,
        }}
        endIcon={<ArrowRightAltIcon fontSize="large" />}
      >
        Tracks
      </Button>
      <Box style={{ marginTop: "31vh" }}>
        <ArrowDownwardIcon fontSize="large" style={{ color: "white" }} />
      </Box>
    </Box>
  );
};

export default Home;
