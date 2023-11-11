import { Box } from "@mui/material";
import { useState } from "react";
import { CreateUserFormSection } from "../components/CreateUserFormSection";
import { LoginFormSection } from "../components/LoginFormSection";
import { CreateUserSucessSection } from "../components/CreateUserSucessSection";
import LinearProgress from "@mui/material/LinearProgress";

export function AuthView(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateSection, setIsCreateSection] = useState(true);
  const [isSuccessSection, setIsSuccessSection] = useState(false);

  const goToLoginSection = () => {
    setIsCreateSection(false);
    setIsSuccessSection(false);
  };

  const goToCreateSection = () => {
    setIsCreateSection(true);
  };

  const renderCreateSection = () => {
    if (isSuccessSection) {
      return <CreateUserSucessSection goToLoginSection={goToLoginSection} />;
    }

    return (
      <CreateUserFormSection
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setIsSuccessSection={setIsSuccessSection}
        goToLoginSection={goToLoginSection}
      />
    );
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

        {isCreateSection ? (
          renderCreateSection()
        ) : (
          <LoginFormSection
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            goToCreateSection={goToCreateSection}
          />
        )}

        <Box />
      </Box>
      <Box sx={{ flexGrow: 1, backgroundColor: "primary.main" }} />
    </>
  );
}
