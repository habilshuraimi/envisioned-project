import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3300",
  withCredentials: true
});

instance.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default instance;