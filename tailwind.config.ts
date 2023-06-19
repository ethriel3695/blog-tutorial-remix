import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
    utils: true,
    logs: true,
  },
  darkMode: ["class", '[data-theme="dark"]'],
} satisfies Config;
