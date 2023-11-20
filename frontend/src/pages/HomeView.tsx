import { Box } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { NotAuthenticatedView } from "../components/NotAuthenticatedView";

export function HomeView(): JSX.Element {
  const authToken = sessionStorage.getItem("token");

  if (!authToken) {
    return <NotAuthenticatedView />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <Outlet />
    </Box>
  );
}
