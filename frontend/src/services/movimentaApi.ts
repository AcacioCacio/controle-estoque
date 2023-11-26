import httpClient from "../lib/httpClient";

async function findAll(): Promise<any[]> {
  const client = httpClient();

  const token = sessionStorage.getItem("token");

  const response = await client.get<any>(
    `${process.env.REACT_APP_API_URL}/movement`,
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data;
}

const movementsApi = {
  findAll,
};

export default movementsApi;
