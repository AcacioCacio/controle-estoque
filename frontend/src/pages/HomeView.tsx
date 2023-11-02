import { Box } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export function HomeView(): JSX.Element {
  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <Outlet />
    </Box>
  );
}
