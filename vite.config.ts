import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import EnvironmentPlugin from "vite-plugin-environment";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
const NODE_ENV = "development";

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    resolve: {
      alias: [{ find: "~", replacement: path.resolve(__dirname, "./app") }],
    },
    build: {
      sourcemap: true,
    },
    test: {
      browser: {
        headless: true,
        // @ts-ignore - the provider field is not typed correctly
        provider: playwright(),
        enabled: true,
        screenshotFailures: false,
        instances: [{ browser: "chromium" }],
      },
      projects: [
        {
          extends: true,
          include: ["./app/**/*.stories.*"],
          plugins: [
            storybookTest({
              storybookUrl: "http://localhost:6006",
              tags: { exclude: ["unstable"] },
            }),
          ],
          test: {
            name: "storybook",
            setupFiles: ["./.storybook/vitest.setup.ts"],
          },
        },
      ],
    },
    plugins: [react(), tsconfigPaths(), EnvironmentPlugin({ NODE_ENV })],
  };
});
