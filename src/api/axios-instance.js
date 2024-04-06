import axios from "axios";

const abortController = new AbortController();

const axiosInstance = axios.create({
  baseURL: "https://api.aqarsas.sa/",
  signal: abortController.signal,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "true";
    config.headers["Access-Control-Allow-Credentials"] = "true";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error)
  }
);

export default axiosInstance;
