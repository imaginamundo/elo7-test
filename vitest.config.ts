import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import magicalSvg from "vite-plugin-magical-svg";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), magicalSvg({ target: "react" })],
  test: {
    environment: "jsdom",
    exclude: ["./tests-e2e", "./node_modules"],
  },
});
