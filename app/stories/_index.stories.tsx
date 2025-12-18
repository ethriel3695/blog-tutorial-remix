import type { Meta, StoryObj } from "@storybook/react-vite";
import { createMemoryRouter, RouterProvider } from "react-router";

import Index from "../routes/_index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "routes/home",
  component: Index,
  // tags: ["autodocs"],
} satisfies Meta<typeof Index>;

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
            return {};
          },
        },
      ]);

      return <RouterProvider router={router} />;
    },
  ],
};
