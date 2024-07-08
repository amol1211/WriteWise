import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://writewise.onrender.com", // Update this to your deployed backend URL
        secure: true, // Set to true for secure HTTPS connection
        changeOrigin: true, // Needed for virtual hosted sites on Render
        rewrite: (path) => path.replace(/^\/api/, ""), // Rewrite path if necessary
      },
    },
  },
  plugins: [react()],
});

// vite.config.js
/* import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
}); */
