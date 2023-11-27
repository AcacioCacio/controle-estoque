import { useSnackbar } from "notistack";
import productsApi from "../services/productsApi";

type HookReturn = (
    id: string
) => void;

const useDeleteProduct = (): HookReturn => {
  const { enqueueSnackbar } = useSnackbar();

  return async (
    id: string
  ): Promise<void> => {
    try {

      await productsApi.remove(id);

      enqueueSnackbar("Produto criado com sucesso", {
        variant: "success",
      });
    } catch (error: any) {
      enqueueSnackbar(error.response.data.message[0], {
        variant: "error",
      });
    }
  };
};

export default useDeleteProduct;
