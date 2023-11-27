import { ProductFormData } from "../types/ProductFormData";
import { useSnackbar } from "notistack";
import productsApi from "../services/productsApi";

type HookReturn = (
  id: string,
  productFormData: ProductFormData,
  handleClose: () => void,
) => void;

const useUpdateProduct = (): HookReturn => {
  const { enqueueSnackbar } = useSnackbar();

  return async (
    id: string,
    productFormData: ProductFormData,
    handleClose: () => void,
  ): Promise<void> => {
    try {
      await productsApi.update(id, productFormData);

      handleClose();

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

export default useUpdateProduct;
