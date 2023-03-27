import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://api.scoptalent.com/api/public";

const client: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      Authorization: "ApiKey 7de8991be6044c7abaa3b4f78a8b32c2",
    },
  },
});

export default client;
