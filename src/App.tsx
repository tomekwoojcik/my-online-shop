import { ThemeProvider } from "@mui/material";
import { MainPage } from "./component/pages/main-page/main-page";
import { theme } from "./context/theme-context";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
