import { Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/themeContext";

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Box component="div">
      <Box component="nav">
        <Box component="ul">
          <Box
            component="li"
            sx={{ listStyle: "none", display: "flex", gap: "25px" }}
          >
            <Box
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              About
            </Box>
            <Box
              component="a"
              href="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Blog
            </Box>
            <Box
              component="div"
              onClick={toggleTheme}
              sx={{ cursor: "pointer" }}
            >
              {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
