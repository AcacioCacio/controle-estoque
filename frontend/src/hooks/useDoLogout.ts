import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

type HookReturn = () => void;

const useDoLogout = (): HookReturn => {
  const navigate = useNavigate();
  const { setAuthToken } = useContext(AuthContext);

  return (): void => {
    setAuthToken(null);

    navigate("/auth", { replace: true });
  };
};

export default useDoLogout;
