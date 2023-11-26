import httpClient from "../lib/httpClient";

// export type FirebaseReturn =
//   | { message: string; error?: undefined }
//   | { error: any; message?: undefined };

async function findAll(): Promise<any[]> {
  const client = httpClient();

  const token = sessionStorage.getItem("token");

  const response = await client.get<any>(
    `${process.env.REACT_APP_API_URL}/movement`,
    { headers: { Authorization: `Bearer ${token}` } },
  );

  return response.data.message;
}

const movementsApi = {
  findAll,
};

export default movementsApi;
