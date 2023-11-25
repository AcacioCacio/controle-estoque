import { useCallback, useEffect, useState } from "react";
import { User } from "../types/User";
import userApi from "../services/userApi";

type HookReturn = {
  usuarios: User[];
  setUsuarios: (value: User[]) => void;
  usuariosTotal: number;
  isLoading: boolean;
  listRefresh: () => void;
};

const useUserList = (): HookReturn => {
  const [list, setList] = useState<User[]>([]);
  const [listIsLoading, setListIsLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      setListIsLoading(true);

      const usuarios = await userApi.findAll();

      setList(usuarios);
    } catch (e) {
      console.error(e);
    } finally {
      setListIsLoading(false);
    }
  }, [setList, setListIsLoading]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    usuarios: list,
    setUsuarios: setList,
    usuariosTotal: list.length,
    isLoading: listIsLoading,
    listRefresh: fetchUsers,
  };
};

export default useUserList;
