import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./index.less";
import { Box } from "@mui/material";

/**
 * @description: Main entry point component of app
 */
const App = (): React.CElement<any, any> => {
  return (
    <Box className="landing">
      <NavBar />
      <Home />
    </Box>
  );
};

export default App;
