const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") ||
  "";

if (!API_URL && import.meta.env.PROD) {
  console.warn(
    "VITE_API_URL is not set. Production API requests will fail until it is configured."
  );
}

export default API_URL;
