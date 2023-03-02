import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import empty from "../../icons/empty01.svg";
import add from "../../icons/add.svg";
import CreateGroupModel from "./CreateGroupModel.jsx";
import { useState } from "react";

const GroupBox = styled(Box)({
  height: "400px",
  backgroundColor: "white",
  borderRadius: "20px",
  marginBlockEnd: "15px",
});

export default function GroupWithcontent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <GroupBox></GroupBox>
      <CreateGroupModel open={open} handleClose={handleClose} />
    </Box>
  );
}
