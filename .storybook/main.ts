import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["@storybook/addon-styling", "storybook-addon-remix-react-router", {
    name: "@storybook/addon-coverage",
    options: {
      istanbul: {
        include: ["**/stories/**"],
      },
    },
  }, "storybook-addon-pseudo-states", "@storybook/addon-docs", "@storybook/addon-a11y", "@chromatic-com/storybook", "storybook-addon-test-codegen", "@storybook/addon-vitest", "msw-storybook-addon"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  staticDirs: [path.resolve("public")],

  env: (config) => ({
    ...config,
    NODE_ENV: "development",
    // IS_STORYBOOK: "true",
  }),
};
export default config;
