import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

let reactPlugin = null

try {
  const mod = await import('@vitejs/plugin-react')
  reactPlugin = mod.default
} catch {
  reactPlugin = null
}

export default defineConfig({
  plugins: [reactPlugin?.(), tailwindcss()].filter(Boolean),
})
