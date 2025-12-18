import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { createMemoryRouter, RouterProvider } from "react-router";

import Posts from "../routes/posts._index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "routes/posts",
  component: Posts,
  // tags: ["autodocs"],
} satisfies Meta<typeof Posts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => {
      const router = createMemoryRouter([
        {
          path: "/",
          element: <Story />,
          loader: () => {
            return { posts: [] };
          },
        },
      ]);

      return <RouterProvider router={router} />;
    },
  ],
};
