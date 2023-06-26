import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Pagination } from "./Pagination";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Atoms/Pagination",
  component: Pagination,
  // tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FirstClickOfNext: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nextButton = await canvas.findByText("Next");
    expect(nextButton).not.toBeNull();
    userEvent.click(nextButton);
  },
};

export const BackToBeginningPrevious: Story = {
  play: async (context) => {
    await FirstClickOfNext.play!(context);
    const { canvasElement } = context;
    const canvas = within(canvasElement);
    const previousButton = await canvas.findByText("Previous page");
    expect(previousButton).not.toBeNull();
    userEvent.click(previousButton);
  },
};
