import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
  withCredentials: true, // This is important for CSRF protection
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiInstance
