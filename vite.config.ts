import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5174,
    proxy: {
      "/websocket": {
        target: "ws://localhost:3500",
        ws: true,
        changeOrigin: true,
        secure: false, // dev mode
      },
      "/sse": {
        target: "http://localhost:3500",
        changeOrigin: true,
        secure: false, // dev mode
        rewrite: () => "/message/sse/data",
      },
    },
  },
});
