import * as React from "react";
import { styled } from "@mui/material/styles";

import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";
import { border } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} columns={12} sx={{ marginBlockStart: "30px" }}>
          <Grid item xs={3}>
            <Box sx={{ border: "1px solid green", height: "350px" }}>menu</Box>
          </Grid>
          <Grid item xs={9}>
            <Box sx={{ border: "1px solid green", height: "350px" }}>menu</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
