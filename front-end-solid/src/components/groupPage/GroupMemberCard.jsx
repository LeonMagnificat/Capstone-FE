import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import profile01 from "../../icons/profile01.svg";
import profile02 from "../../icons/profile02.svg";
import profile03 from "../../icons/profile03.svg";
import profile04 from "../../icons/profile04.svg";
import profile05 from "../../icons/profile05.svg";
import profile06 from "../../icons/profile06.svg";
import profile07 from "../../icons/profile07.svg";
import profile08 from "../../icons/profile08.svg";
import profile09 from "../../icons/profile09.svg";
import profile10 from "../../icons/profile10.svg";
import profile11 from "../../icons/profile11.svg";
import profile12 from "../../icons/profile12.svg";
import profile13 from "../../icons/profile13.svg";
import profile14 from "../../icons/profile14.svg";
import profile15 from "../../icons/profile15.svg";
import profile16 from "../../icons/profile16.svg";
import MemberContributionCard from "../groupPage/MemberContributionCard.jsx";

export default function GroupMemberCard() {
  const profiles = [profile01, profile02, profile03, profile04, profile05, profile06, profile07, profile08, profile09, profile10, profile11, profile12, profile13, profile14, profile15, profile16];
  const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

  const AccordionBox = styled(Accordion)({
    backgroundColor: "#fbfbfb",
    boxShadow: "none",
    borderRadius: "15px !important",
  });

  const AccordionMemberBox = styled(AccordionSummary)({
    display: "flex",
    alignItems: "center !important",
  });

  return (
    <div>
      <AccordionBox>
        <AccordionMemberBox expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <img className="avatar-profile" src={randomProfile} alt="" />
          <Typography sx={{ marginBlockStart: "8px", marginInlineStart: "10px" }}>Member Name </Typography>
        </AccordionMemberBox>
        <AccordionDetails>
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
          <MemberContributionCard />
        </AccordionDetails>
      </AccordionBox>
    </div>
  );
}
