import { createContext, ReactNode, useState } from "react";

interface AuthContextProps {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  const value = { authToken, setAuthToken };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
