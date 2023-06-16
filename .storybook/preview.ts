import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-styling";
import { withRouter } from "storybook-addon-react-router-v6";

import "../app/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withRouter,
];
