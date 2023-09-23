import defaultTheme from "./data/defaultTheme";
import {ThemeProvider, Typography} from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography sx={{color: "primary.main"}}>Teste</Typography>
    </ThemeProvider>
  );
}

export default App;
