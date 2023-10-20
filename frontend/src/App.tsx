import defaultTheme from "./data/defaultTheme";
import { Box, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex", width: "100vw", height: "100vh", m: 0 }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
