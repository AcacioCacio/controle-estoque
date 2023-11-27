import { ProductFormData } from "../types/ProductFormData";
import httpClient from "../lib/httpClient";

export type FirebaseReturn =
  | { message: string; error?: undefined }
  | { error: any; message?: undefined };

async function create(
  productFormData: ProductFormData,
): Promise<FirebaseReturn> {
  const client = httpClient();

  const formData = {
    ...productFormData,
    quant: +productFormData.quant,
  };

  const token = sessionStorage.getItem("token");

  const response = await client.post<FirebaseReturn>(
    `${process.env.REACT_APP_API_URL}/products`,
    formData,
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data;
}

async function update(
  id: string,
  productFormData: ProductFormData,
): Promise<FirebaseReturn> {
  const client = httpClient();

  const formData = {
    ...productFormData,
    quant: +productFormData.quant,
  };

  const token = sessionStorage.getItem("token");

  const response = await client.patch<FirebaseReturn>(
    `${process.env.REACT_APP_API_URL}/products/${id}`,
    formData,
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data;
}

async function remove(id: string): Promise<void> {
  const client = httpClient();

  const token = sessionStorage.getItem("token");

  await client.delete<void>(`${process.env.REACT_APP_API_URL}/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

async function findAll(): Promise<any[]> {
  const client = httpClient();

  const token = sessionStorage.getItem("token");

  const response = await client.get<any>(
    `${process.env.REACT_APP_API_URL}/products`,
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data;
}

async function findSelectOptions(): Promise<any[]> {
  const client = httpClient();

  const token = sessionStorage.getItem("token");

  const response = await client.get<any>(
    `${process.env.REACT_APP_API_URL}/products/params`,
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data;
}

const productsApi = {
  findAll,
  create,
  update,
  remove,
  findSelectOptions,
};

export default productsApi;
