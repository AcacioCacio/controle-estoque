import { UserFormData } from "../types/UserFormData";
import axios from "axios";

export type FirebaseReturn =
  | { message: string; error?: undefined }
  | { error: any; message?: undefined };

async function create(userFormData: UserFormData): Promise<FirebaseReturn> {
  const response = await axios.post<FirebaseReturn>(
    `${process.env.REACT_APP_API_URL}/user`,
    userFormData,
  );

  return response.data;
}

const userApi = {
  create,
};

export default userApi;
