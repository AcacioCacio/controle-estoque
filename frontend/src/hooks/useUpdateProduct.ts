import { ProductFormData } from "../types/ProductFormData";
import { useSnackbar } from "notistack";
import productsApi from "../services/productsApi";

type HookReturn = (
  productFormData: ProductFormData
) => void;

const useUpdateProduct = (): HookReturn => {
  const { enqueueSnackbar } = useSnackbar();

  return async (
    productFormData: ProductFormData,
  ): Promise<void> => {
    try {

      await productsApi.update(productFormData);

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
