import { SnackbarProvider } from "notistack";
import { Box, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ConfirmProvider } from "material-ui-confirm";
import defaultTheme from "./data/defaultTheme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider autoHideDuration={6000}>
        <ConfirmProvider>
          <Box sx={{ display: "flex", width: "100vw", height: "100vh", m: 0 }}>
            <Outlet />
          </Box>
        </ConfirmProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
