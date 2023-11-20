import { useNavigate } from "react-router-dom";
import { AuthFormData } from "../types/AuthFormData";
import { useSnackbar } from "notistack";
import userApi from "../services/userApi";

type HookReturn = (
  authFormData: AuthFormData,
  setIsLoading: (value: boolean) => void,
) => void;

const useDoLogin = (): HookReturn => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return async (
    authFormData: AuthFormData,
    setIsLoading: (value: boolean) => void,
  ): Promise<void> => {
    try {
      setIsLoading(true);

      const response = await userApi.auth(authFormData);

      sessionStorage.setItem("token", response.acess_token);

      navigate("/home", { replace: true });
    } catch (error) {
      enqueueSnackbar(String(error), {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
};

export default useDoLogin;
