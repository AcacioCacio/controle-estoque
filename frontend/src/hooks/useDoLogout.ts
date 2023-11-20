import { useNavigate } from "react-router-dom";

type HookReturn = () => void;

const useDoLogout = (): HookReturn => {
  const navigate = useNavigate();

  return (): void => {
    sessionStorage.removeItem("token");

    navigate("/auth", { replace: true });
  };
};

export default useDoLogout;
