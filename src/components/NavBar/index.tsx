import Box from "@mui/material/Box";
import { MenuItem, Typography } from "@mui/material";
import { NAV_ITEMS } from "../../constants/constants";
import { LIGHT_WEIGHT } from "../../constants/styles";
/**
 * @description: Navbar component for website, linking to pages
 */
const Navbar = (): React.CElement<any, any> => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "nowrap",
        backgroundColor: "black",
        opacity: 0.8,
        color: "white",
        height: "15vh",
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
              display: "flex",
              flexWrap: "no-wrap",
              mr: 2,
              fontWeight: LIGHT_WEIGHT,
              letterSpacing: ".6rem",
              textDecoration: "none",
            }}
          >
            THE AP CAVE
          </Typography>
          <Typography
            variant="caption"
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
            Music Production | Artist Development
          </Typography>
        </Box>
      </Box>
      <Box className="ghost"></Box>
      <Box className="ghost"></Box>
      <Box sx={{ display: "flex", flexWrap: "no-wrap" }}>
        {NAV_ITEMS.map((item) => (
          <MenuItem key={item}>
            <Typography
              textAlign="center"
              mr={1}
              sx={{ textTransform: "uppercase", letterSpacing: ".2rem" }}
            >
              {item}
            </Typography>
          </MenuItem>
        ))}
      </Box>
    </Box>
  );
};
export default Navbar;
