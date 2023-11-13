import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: "grey",
      main: "#0989e3",
      dark: "#005db0",
      contrastText: "#000",
    },
    secondary: {
      main: "grey",
      light: "#82e9de",
      dark: "#00867d",
      contrastText: "#000",
    },
    button: {
      main: "dimgray",
      light: "#82e9de",
      dark: "#00867d",
      contrastText: "#000",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
});

export default theme;
