import type { Meta, StoryObj } from "@storybook/react";

import { HomePage } from "./HomePage";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Templates/HomePage",
  component: HomePage,
  // tags: ["autodocs"],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
