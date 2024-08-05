import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/post": {
        target: "https://writewise.onrender.com",
        secure: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/post/, ""),
      },
      "/profile": {
        target: "https://writewise.onrender.com",
        secure: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/profile/, ""),
      },
      "/logout": {
        target: "https://writewise.onrender.com",
        secure: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/logout/, ""),
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
