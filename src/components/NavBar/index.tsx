import * as React from "react";
import Box from "@mui/material/Box";
import { MenuItem, Typography } from "@mui/material";
import "./index.less";

const pages = ["Home", "News", "Music", "Gear", "About"];

const Navbar = () => {
  return (
    <Box
      className="nav-container"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black",
        flexDirection: "row",
        flexWrap: "nowrap",
        opacity: 0.8,
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "no-wrap" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mr: 2,
              fontFamily: "Roboto",
              fontWeight: 300,
              letterSpacing: ".6rem",
              color: "inherit",
              display: "flex",
              flexWrap: "no-wrap",
              textDecoration: "none",
            }}
          >
            THE AP CAVE
          </Typography>
          <Typography
            variant="caption"
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
            Music Production | Artist Development
          </Typography>
        </Box>
      </Box>
      <Box className="ghost"></Box>
      <Box className="ghost"></Box>
      <Box sx={{ display: "flex", flexWrap: "no-wrap" }}>
        {pages.map((page) => (
          <MenuItem key={page}>
            <Typography
              textAlign="center"
              mr={1}
              sx={{ textTransform: "uppercase", letterSpacing: ".2rem" }}
            >
              {page}
            </Typography>
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};
export default Navbar;
