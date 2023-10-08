import defaultTheme from "./data/defaultTheme";
import { ThemeProvider } from "@mui/material";
import { AuthView } from "./components/AuthView";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthView />
    </ThemeProvider>
  );
}

export default App;
