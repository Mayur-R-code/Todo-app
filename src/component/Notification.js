import { Close } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

const Notification = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleClose = () => {
    setOpenPopup(false);
  };
  useEffect(() => {
    setOpenPopup(true);
    setTimeout(() => {
      setOpenPopup(false);
    }, 5000);
  }, []);

  return (
    <>
      {openPopup && (
        <Box sx={{ position: "relative" }}>
          <Box
            component="div"
            width={"auto"}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              background: "#fff",
              padding: "12px",
              justifyContent: "space-between",
              borderRadius: "5px",
              position: "fixed",
              top: "20px",
              right: "80px",
            }}
          >
            <Box component="h3" m={0} fontSize={16} fontWeight={500}>
              Welcome to the Web
            </Box>
            <IconButton onClick={handleClose} p={0} sx={{ padding: "0" }}>
              <Close sx={{ cursor: "pointer" }} />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Notification;
