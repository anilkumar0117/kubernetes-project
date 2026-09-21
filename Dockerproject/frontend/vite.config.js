import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Only used for `npm run dev` locally, before the app is bundled into
    // the single Docker image. In production the backend serves both the
    // API and the built frontend from the same origin, so no proxy is needed.
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
