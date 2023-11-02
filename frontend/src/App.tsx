import defaultTheme from "./data/defaultTheme";
import { Box, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ConfirmProvider } from "material-ui-confirm";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ConfirmProvider>
        <Box sx={{ display: "flex", width: "100vw", height: "100vh", m: 0 }}>
          <Outlet />
        </Box>
      </ConfirmProvider>
    </ThemeProvider>
  );
}

export default App;
