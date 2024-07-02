import { Box } from "@mui/material";
import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Box component="div" className="header">
        <Box
          component="div"
          sx={{
            maxWidth: "990px",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box component="h2">Brand Logo</Box>
            <Nav />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
