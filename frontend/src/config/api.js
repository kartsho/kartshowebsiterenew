const API_URL = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD
    ? "https://backend.kartsho.com"
    : "http://localhost:5000")
).replace(/\/$/, "");
export default API_URL;
