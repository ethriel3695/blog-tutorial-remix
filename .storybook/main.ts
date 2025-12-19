import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../app/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "storybook-addon-remix-react-router",
    {
      name: "@storybook/addon-coverage",
      options: {
        istanbul: {
          include: ["**/stories/**"],
        },
      },
    },
    "storybook-addon-pseudo-states",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
    "storybook-addon-test-codegen",
    "@storybook/addon-vitest",
    "msw-storybook-addon",
    {
      name: "@storybook/addon-mcp",
      options: {
        toolsets: {
          dev: true, // Tools for story URL retrieval and UI building instructions (default: true)
          docs: true, // Tools for component manifest and documentation (default: true, requires experimental feature flag below 👇)
        },
        experimentalFormat: "markdown", // Output format: 'markdown' (default) or 'xml'
      },
    },
  ],
  features: {
    experimentalComponentsManifest: true,
    experimentalCodeExamples: true, // optional
  },

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
