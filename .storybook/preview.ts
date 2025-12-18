// import { withAppProviders } from "@/storybook-decorators/storybook-app-providers";
// import { WithRTLStorybookDecorator } from "@/storybook-decorators/storybook-rtl";
// import { initFocusMode } from "@remix/app/utils/focus-mode";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";
import { initialize, mswLoader } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "storybook/viewport";
// import "../styles/root.css";
// import { reactIntl } from "./reactIntl";

// initFocusMode();
initialize();

// export const parameters = {
//   reactIntl,
// };

export const loaders = [mswLoader];

export const decorators = [
  // withAppProviders,
  // WithRTLStorybookDecorator,
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export const globalTypes: Preview["globalTypes"] = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "sun",
      // Array of plain string values or MenuItem shape
      items: [
        { value: undefined, title: "System", left: "🌞" },
        { value: "light", title: "Light", left: "🌞" },
        { value: "dark", title: "Dark", left: "🌛" },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
  rtl: {
    name: "RTL",
    description: "Global RTL for components",
    toolbar: {
      icon: "globe",
      items: [
        { value: undefined, title: "LTR" },
        { value: true, title: "RTL" },
      ],
      dynamicTitle: true,
    },
  },
};

export const SUPPORTED_VIEWPORTS: Array<keyof typeof INITIAL_VIEWPORTS> = [
  "ipad",
  "ipad12p",
  "iphone12",
  "iphone14promax",
  "iphone5",
  "iphonexr",
  "iphonexsmax",
  "pixel",
  "pixelxl",
] as const;
const SUPPORTED_VIEWPORTS_MAP = Object.fromEntries(
  SUPPORTED_VIEWPORTS.map((key) => [key, INITIAL_VIEWPORTS[key]])
);

const preview: Preview = {
  parameters: {
    viewport: {
      options: {
        ...SUPPORTED_VIEWPORTS_MAP,
        ...MINIMAL_VIEWPORTS,
      },
    },
    // reactIntl,
    a11y: { test: "error" },
    initialGlobals: {
      viewport: { value: "tablet", isRotated: false },
      theme: "light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tags: [],
};

export default preview;
