import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:
  {
    port: 3006,
    hot: true,
    host: true,
    open: !isCodeSandbox // Open if it's not a CodeSandbox
  },
})
