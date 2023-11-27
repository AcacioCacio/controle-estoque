import httpClient from "../lib/httpClient";
import { MovimentacaoFormData } from "../types/MovimentacaoFormData";

export type FirebaseReturn =
  | { message: string; error?: undefined }
  | { error: any; message?: undefined };

async function create(
  movimentacaoFormData: MovimentacaoFormData,
): Promise<FirebaseReturn> {
  const client = httpClient();

  const formData = {
    ...movimentacaoFormData,
    quant: +movimentacaoFormData.quant,
  };

  const token = sessionStorage.getItem("token");

  const response = await client.post<FirebaseReturn>(
    `${process.env.REACT_APP_API_URL}/movement`,
    formData,
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data;
}

async function findAll(): Promise<any[]> {
  const client = httpClient();

  const token = sessionStorage.getItem("token");

  const response = await client.get<any>(
    `${process.env.REACT_APP_API_URL}/movement`,
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data.movimentacoes;
}

const movementsApi = {
  findAll,
  create,
};

export default movementsApi;
