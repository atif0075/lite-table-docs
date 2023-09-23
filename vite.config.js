import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import json from "@rollup/plugin-json";
export default defineConfig({
  plugins: [vue(), json()],
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "src"),
      "@components": require("path").resolve(__dirname, "src/components"),
      "@simple-examples": require("path").resolve(
        __dirname,
        "src/components/simple-examples"
      ),
    },
  },
});
