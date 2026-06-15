const rawApiUrl =
  import.meta.env.VITE_API_URL ||
  "https://backend.kartsho.com";

const API_URL = rawApiUrl.replace(/\/$/, "");

console.log("API env debug:", {
  mode: import.meta.env.MODE,
  prod: import.meta.env.PROD,
  viteApiUrl: import.meta.env.VITE_API_URL,
  finalApiUrl: API_URL,
});

export default API_URL;
