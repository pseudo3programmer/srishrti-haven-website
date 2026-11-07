import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { imagetools } from "vite-imagetools";

// Static SPA build for GitHub Pages.
// Base is "/" because the site is served from a custom domain (shreeshrushticottage.com).
// If you ever deploy to https://<user>.github.io/<repo>/ without a custom domain,
// change `base` to "/<repo>/".
export default defineConfig({
  base: "/",
  plugins: [imagetools(), react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
});
