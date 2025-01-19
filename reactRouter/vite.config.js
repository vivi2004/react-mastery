import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      buffer: "buffer", // Alias to polyfill Buffer
    },
  },
  define: {
    global: {}, // Ensure `global` is defined for libraries expecting Node.js globals
  },
});
