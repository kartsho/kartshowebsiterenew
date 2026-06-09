import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

let reactPlugin = null

try {
  const mod = await import('@vitejs/plugin-react')
  reactPlugin = mod.default
} catch {
  reactPlugin = null
}

export default defineConfig({
  envDir: "frontend",
  cacheDir: ".vite-cache",
  resolve: {
    alias: {
      react: fileURLToPath(new URL("./node_modules/react", import.meta.url)),
      "react-dom": fileURLToPath(new URL("./node_modules/react-dom", import.meta.url)),
      "react-dom/client": fileURLToPath(new URL("./node_modules/react-dom/client.js", import.meta.url)),
      "react/jsx-runtime": fileURLToPath(new URL("./node_modules/react/jsx-runtime.js", import.meta.url)),
      "react/jsx-dev-runtime": fileURLToPath(new URL("./node_modules/react/jsx-dev-runtime.js", import.meta.url)),
    },
    dedupe: ["react", "react-dom"],
  },
  plugins: [reactPlugin?.(), tailwindcss()].filter(Boolean),
});
