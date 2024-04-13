import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "https://api.aqarsas.sa/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = "*/*";
    config.headers["Accept-Language"] = "en-GB,en-US;q=0.9,en;q=0.8";
    config.headers["Content-Type"] = "application/json; charset=UTF-8";
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
