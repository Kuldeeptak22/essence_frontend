import axios from "axios";
import { BaseURL } from "./utils/nameSpace";

const axiosInstance = axios.create({
  baseURL: BaseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("UserToken").replace(/"/g, "");
    const token = localStorage.getItem("UserToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.replace(/"/g, "")}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
