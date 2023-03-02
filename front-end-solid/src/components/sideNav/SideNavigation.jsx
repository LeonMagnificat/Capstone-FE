import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import logo from "../../icons/logo.svg";
import home from "../../icons/homeIcon-active.svg";
import group from "../../icons/group2.svg";
import profile from "../../icons/profile01.svg";

const NavBarBox = styled(Box)({
  height: "350px",
  backgroundColor: "white",
  borderRadius: "20px",
});

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBarBox>
        <Box sx={{ height: "100%", padding: "37px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Box>
            <img src={logo} alt="" />
          </Box>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBlockEnd: "10px" }}>
              <img src={home} alt="" />
              <Typography sx={{ fontSize: "16px", marginInlineStart: "10px", color: "#E09B2D", cursor: "pointer" }}>Home</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginBlockStart: "10px", cursor: "pointer" }}>
              <img src={group} alt="" />
              <Typography sx={{ fontSize: "16px", marginInlineStart: "10px" }}>Group</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img className="avatar-profile" src={profile} alt="" />
            <Typography sx={{ fontSize: "16px", marginInlineStart: "10px" }}>User Name</Typography>
          </Box>
        </Box>
      </NavBarBox>
    </Box>
  );
}
