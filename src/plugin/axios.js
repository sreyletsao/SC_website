import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
  withCredentials: true, // Needed only if using cookie-based auth (can keep for now)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// ✅ Request Interceptor: Automatically include Bearer token if available
apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      delete config.headers["Authorization"]; // Clean if token missing
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor: Redirect to login on 401 Unauthorized
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token"); // Optional: clear token on 401
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default apiInstance;
