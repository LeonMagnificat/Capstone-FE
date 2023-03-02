import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { pink } from "@mui/material/colors";
import { BrowserRouter } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#008A93",
    },
    secondary: {
      main: pink[500],
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif;",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
