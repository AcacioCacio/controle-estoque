import axios, { AxiosInstance } from "axios";

function httpClient(): AxiosInstance {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  });
}

export default httpClient;
