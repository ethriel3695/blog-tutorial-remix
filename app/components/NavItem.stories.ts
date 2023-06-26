import type { Meta, StoryObj } from "@storybook/react";

import { NavItem } from "./NavItem";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Atoms/NavItem",
  component: NavItem,
  // tags: ["autodocs"],
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    path: "/",
    label: "Home",
    end: true,
  },
};

export const NotActive: Story = {
  args: {
    path: "/posts",
    label: "Posts",
  },
};
