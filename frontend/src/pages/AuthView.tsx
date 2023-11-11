import { Box } from "@mui/material";
import { useState } from "react";
import { AuthFormSection } from "../components/AuthFormSection";
import { LoginFormSection } from "../components/LoginFormSection";
import LinearProgress from "@mui/material/LinearProgress";

export function AuthView(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthSection, setIsAuthSection] = useState(true);

  const goToLoginSection = () => {
    setIsAuthSection(false);
  };

  const goToAuthSection = () => {
    setIsAuthSection(true);
  };

  return (
    <>
      <Box
        sx={{
          width: { xs: 400, lg: 600 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "background.paper",
          gap: 4,
        }}
      >
        <Box sx={{ width: "100%" }}>{isLoading && <LinearProgress />}</Box>

        {isAuthSection ? (
          <AuthFormSection
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            goToLoginSection={goToLoginSection}
          />
        ) : (
          <LoginFormSection
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            goToAuthSection={goToAuthSection}
          />
        )}

        <Box />
      </Box>
      <Box sx={{ flexGrow: 1, backgroundColor: "primary.main" }} />
    </>
  );
}
