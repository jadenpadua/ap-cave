import React from "react";
import NavBar from "./components/NavBar";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Typed from "react-typed";
import { Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./index.less";

const App = (): React.CElement<any, any> => {
  return (
    <>
      <Box
        className="landing"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar />

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
              flexWrap: "no-wrap",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10vh",
              height: "10vh",
              width: 500,
              opacity: 0.9,
              backgroundColor: "#1A1A1A",
              borderRadius: "2%",
              color: "white",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mr: 2,
                fontFamily: "Roboto",
                fontWeight: 300,
                letterSpacing: ".2rem",
                color: "white",
                display: "flex",
                flexWrap: "no-wrap",
                textDecoration: "none",
              }}
            >
              <Typed
                strings={[
                  "Let's Jam!",
                  "Check out my tracks!",
                  "Let's Connect!",
                ]}
                typeSpeed={80}
                backDelay={1000}
                backSpeed={60}
                loop
              />
            </Typography>
          </Box>
          <Button
            style={{
              backgroundColor: "#1A1A1A",
              color: "white",

              marginTop: "20vh",
              fontSize: "1.5em",
              width: 200,
            }}
            endIcon={<ArrowRightAltIcon />}
          >
            Tracks
          </Button>
          <Box style={{ marginTop: "31vh" }}>
            <ArrowDownwardIcon fontSize="large" style={{ color: "white" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
