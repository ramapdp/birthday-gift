import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { UserConfigExport } from "vite";
import { configDefaults } from "vitest/config";

const config: UserConfigExport = defineConfig({
  plugins: [react()],
  base: "/special-gift/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.ts",
    exclude: [...configDefaults.exclude, "node_modules/**"],
  },
});

export default config;
