import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 385,
  width: "70%",
  //   height: "214px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  "&:focus-visible": {
    outline: "none",
  },
};

export default function BasicModal({ children, setOpen, open, modalTitle }) {
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen} variant="contained" >+ add todo</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="div"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "28px",
            }}
          >
            <Box
              component="h3"
              m={0}
              sx={{ padding: "8px 0px", fontWeight: "500" }}
            >
              {modalTitle}
            </Box>
            <IconButton
              onClick={handleClose}
              sx={{
                // width: "100%",
                // display: "flex",
                // justifyContent: "flex-end",
                // marginBottom: "20px",
                cursor: "pointer",
              }}
            >
              <Close />
            </IconButton>
          </Box>
          <Typography
            id="modal-modal-title"
            component="div"
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"column"}
            gap={"80px"}
          >
            {children}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
