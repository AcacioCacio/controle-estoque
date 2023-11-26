import { useCallback, useEffect, useState } from "react";
import { Estoque } from "../types/Estoque";
import productsApi from "../services/productsApi";

type HookReturn = {
  produtos: Estoque[];
  setProdutos: (value: Estoque[]) => void;
  produtosTotal: number;
  isLoading: boolean;
  listRefresh: () => void;
};

const useEstoqueList = (): HookReturn => {
  const [list, setList] = useState<Estoque[]>([]);
  const [listIsLoading, setListIsLoading] = useState(false);

  const fetchEstoques = useCallback(async () => {
    try {
      setListIsLoading(true);

      const produtos = await productsApi.findAll();

      setList(produtos);
    } catch (e) {
      console.error(e);
    } finally {
      setListIsLoading(false);
    }
  }, [setList, setListIsLoading]);

  useEffect(() => {
    fetchEstoques();
  }, [fetchEstoques]);

  return {
    produtos: list,
    setProdutos: setList,
    produtosTotal: list.length,
    isLoading: listIsLoading,
    listRefresh: fetchEstoques,
  };
};

export default useEstoqueList;
