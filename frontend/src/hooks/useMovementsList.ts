import { useCallback, useEffect, useState } from "react";
import { Movimentacao } from "../types/Movimentacao";
import movimentaApi from "../services/movimentaApi";

type HookReturn = {
  movimentacoes: Movimentacao[];
  setMovimentacoes: (value: Movimentacao[]) => void;
  movimentacoesTotal: number;
  isLoading: boolean;
  listRefresh: () => void;
};

const useMovimentacaoList = (): HookReturn => {
  const [list, setList] = useState<Movimentacao[]>([]);
  const [listIsLoading, setListIsLoading] = useState(false);

  const fetchMovimentacaos = useCallback(async () => {
    try {
      setListIsLoading(true);

      const movimentacoes = await movimentaApi.findAll();

      setList(movimentacoes);
    } catch (e) {
      console.error(e);
    } finally {
      setListIsLoading(false);
    }
  }, [setList, setListIsLoading]);

  useEffect(() => {
    fetchMovimentacaos();
  }, [fetchMovimentacaos]);

  return {
    movimentacoes: list,
    setMovimentacoes: setList,
    movimentacoesTotal: list.length,
    isLoading: listIsLoading,
    listRefresh: fetchMovimentacaos,
  };
};

export default useMovimentacaoList;
