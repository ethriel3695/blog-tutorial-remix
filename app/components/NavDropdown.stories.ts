import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { NavDropdown } from "./NavDropdown";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "NavDropdown",
  component: NavDropdown,
} satisfies Meta<typeof NavDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menu = await canvas.findByTestId("navMenu");
    expect(menu).not.toBeNull();
    userEvent.click(menu);
    const navItem = await canvas.findByText("Home");
    expect(navItem).not.toBeNull();
  },
};

export const CloseMenu: Story = {
  play: async (context) => {
    await Basic.play!(context);
    const { canvasElement } = context;
    const canvas = within(canvasElement);
    userEvent.click(await canvas.findByTestId("navMenu"));
  },
};
