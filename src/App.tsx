import { ThemeProvider } from "@mui/material";
import { MainPage } from "./component/pages/mainPage/mainPage";
import { theme } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
