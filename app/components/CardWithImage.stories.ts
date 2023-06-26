import type { Meta, StoryObj } from "@storybook/react";

import { CardWithImage } from "./CardWithImage";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Molecules/CardWithImage",
  component: CardWithImage,
  // tags: ["autodocs"],
} satisfies Meta<typeof CardWithImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
