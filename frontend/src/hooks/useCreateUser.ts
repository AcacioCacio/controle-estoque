import { UserFormData } from "../types/UserFormData";
import { useSnackbar } from "notistack";
import userApi from "../services/userApi";

type HookReturn = (
  userFormData: UserFormData,
  setIsLoading: (value: boolean) => void,
  setIsSuccessSection: (value: boolean) => void,
) => void;

const useCreateUser = (): HookReturn => {
  const { enqueueSnackbar } = useSnackbar();

  return async (
    userFormData: UserFormData,
    setIsLoading: (value: boolean) => void,
    setIsSuccessSection: (value: boolean) => void,
  ): Promise<void> => {
    try {
      setIsLoading(true);

      const formattedFormData = {
        ...userFormData,
        name: userFormData.name.trim(),
        email: userFormData.email.trim().toLowerCase(),
      };

      await userApi.create(formattedFormData);

      setIsSuccessSection(true);

      enqueueSnackbar("Usuário criado com sucesso", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar(String(error), {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
};

export default useCreateUser;
