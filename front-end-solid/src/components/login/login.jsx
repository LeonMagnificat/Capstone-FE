import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { style, titleStyle } from "./login-style.jsx";
import { styled } from "@mui/material/styles";
import googleIcon from "../../icons/google.svg";

export default function LoginModel() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const InputField = styled(TextField)({
    border: "none",
    borderRadius: "20px",
    height: "56px",
    marginBlockEnd: "23px",
  });

  const ModelTitles = styled(Typography)({
    fontSize: "24px",
    marginBlock: "39px",
  });
  const GoogleButton = styled(Button)({
    height: "56px",
    borderRadius: "20px",
    backgroundColor: "white",
    color: "black",
    textTransform: "capitalize",
    boxShadow: "none",
    border: "1px solid #D6D6D6",
    marginTop: "15px",
    marginBottom: "60px",
  });

  const MainButton = styled(Button)({
    height: "56px",
    width: "129px",
    borderRadius: "20px",
    textTransform: "capitalize",
  });

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1000,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ModelTitles sx={titleStyle} variant="h3" gutterBottom>
              Login
            </ModelTitles>
            <form action="">
              <InputField className="inputRounded" label="First Name" variant="outlined" fullWidth />
              <InputField className="inputRounded" label="Last Name" variant="outlined" fullWidth />
            </form>
            <Typography>Or continue with</Typography>
            <GoogleButton fullWidth variant="contained">
              <img src={googleIcon} alt="" className="margin-right" />
              Google
            </GoogleButton>
            <MainButton variant="contained" size="large">
              Sign In
            </MainButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
