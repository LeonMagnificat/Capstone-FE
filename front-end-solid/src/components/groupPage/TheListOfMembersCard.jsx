import * as React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import addsm from "../../icons/addsm.svg";
import CreateGroupModel from "../Group/CreateGroupModel.jsx";
import GroupMemberCard from "./GroupMemberCard.jsx";

const GroupBox = styled(Box)({
  backgroundColor: "white",
  borderRadius: "20px",
  marginBlockEnd: "15px",
  paddingInline: "30px",
  paddingBlock: "20px",
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const AddButton = styled(Button)({
  height: "35px",
  width: "35px",
  borderRadius: "50px",
  textTransform: "capitalize",
  boxShadow: "none",
  minWidth: "0",
});

export default function TheListOfMembersCard() {
  const [open, setOpen] = useState(false);
  const content = true;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6}>
          <GroupBox>
            <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", marginBlockEnd: "20px" }}>
              <Box>
                <Typography>Group Name (6)</Typography>
              </Box>
              <Box>
                <AddButton variant="outlined" color="secondary" onClick={handleOpen}>
                  <img src={addsm} alt="" />
                </AddButton>
              </Box>
            </Box>
            <GroupMemberCard />
          </GroupBox>
        </Grid>
      </Grid>
      <CreateGroupModel open={open} handleClose={handleClose} />
    </Box>
  );
}
