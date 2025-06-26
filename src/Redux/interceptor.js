import axios from "axios";
import Toaster from "../Shared/Toaster";
import { customLogout } from "./features/Auth/authSlice";

const axiosInstance = axios.create({
  baseURL: "https://workshop.babylonbodyshop.com/api/v1",
  // baseURL: "http://3.148.76.206/api/v1",
  // baseURL: "http://10.3.1.206:5000/api/v1",
  // baseURL: "http://10.3.1.122:5000/api/v1",
});

let store;

const initializeAxiosInterceptors = async () => {
  if (!store) {
    const storeModule = await import("./configureStore");
    store = storeModule.store;
  }

  axiosInstance.interceptors.request.use(
    (config) => {
      const hasFiles = config.data instanceof FormData;

      if (hasFiles) {
        config.headers["Content-Type"] = "multipart/form-data";
        config.headers["maxBodyLength"] = "Infinity";
      } else {
        config.headers["Content-Type"] = "application/json";
        config.headers["Accept"] = "application/json";
      }

      const user = store.getState().user?.user;
      const token = store.getState().user?.token;

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;
      if (response && response.status === 401) {
        store.dispatch(customLogout());
        Toaster.error(response?.data?.error?.detail || "Unauthorized");
      }
      return Promise.reject(error);
    }
  );
};

initializeAxiosInterceptors();

export default axiosInstance;
