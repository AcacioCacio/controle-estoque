import { UserFormData } from "../types/UserFormData";
import { AuthFormData } from "../types/AuthFormData";
import { UserToken } from "../types/UserToken";
import httpClient from "../lib/httpClient";

export type FirebaseReturn =
  | { message: string; error?: undefined }
  | { error: any; message?: undefined };

async function create(userFormData: UserFormData): Promise<FirebaseReturn> {
  const client = httpClient();

  const response = await client.post<FirebaseReturn>(
    `${process.env.REACT_APP_API_URL}/user`,
    userFormData,
  );

  return response.data;
}

async function auth(authFormData: AuthFormData): Promise<UserToken> {
  const client = httpClient();

  const response = await client.post<UserToken>(
    `${process.env.REACT_APP_API_URL}/login`,
    authFormData,
  );

  return response.data;
}

const userApi = {
  create,
  auth,
};

export default userApi;
