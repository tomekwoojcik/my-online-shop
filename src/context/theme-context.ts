import { createTheme } from "@mui/material";

import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#f2efe9",
    },
    secondary: {
      main: "#ff9a16",
    },
    background: {
      default: "#f2efe9",
    },
    text: {
      primary: "#0f2614",
    },
  },
};

export const theme = createTheme(themeOptions);
