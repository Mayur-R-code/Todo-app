import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Icon } from "@mui/material";
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

export default function BasicModal({ children, setOpen, open }) {
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
          <Icon
            onClick={handleClose}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <Close />
          </Icon>
          <Typography
            id="modal-modal-title"
            component="div"
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"column"}
            gap={"93px"}
          >
            {children}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
