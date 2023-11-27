import { useSnackbar } from "notistack";
import { MovimentacaoFormData } from "../types/MovimentacaoFormData";
import movementsApi from "../services/movimentaApi";

type HookReturn = (
  movimentacaoFormData: MovimentacaoFormData,
  handleClose: () => void,
) => void;

const useCreateMovement = (): HookReturn => {
  const { enqueueSnackbar } = useSnackbar();

  return async (
    movimentacaoFormData: MovimentacaoFormData,
    handleClose: () => void,
  ): Promise<void> => {
    try {
      await movementsApi.create(movimentacaoFormData);

      handleClose();

      enqueueSnackbar("Transação criada com sucesso", {
        variant: "success",
      });
    } catch (error: any) {
      enqueueSnackbar(error.response.data.message[0], {
        variant: "error",
      });
    }
  };
};

export default useCreateMovement;
