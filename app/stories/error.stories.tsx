import { type StoryObj, type Meta } from "@storybook/react-vite";
import { GeneralErrorBoundary } from "../components/error-boundary";
import { createMemoryRouter, RouterProvider, Form } from "react-router";

export default {
  title: "ErrorBoundary",
  component: () => <div>Sample Child Component</div>,
} satisfies Meta<typeof GeneralErrorBoundary>;

export const LoaderError = {
  decorators: [
    (Story) => {
      const router = createMemoryRouter([
        {
          path: "/",
          element: <Story />,
          ErrorBoundary: GeneralErrorBoundary,
          loader: () => {
            // throw an error with a status code
            throw new Response("Error Message", {
              status: 500,
            });
          },
        },
      ]);

      return <RouterProvider router={router} />;
    },
  ],
} satisfies StoryObj<typeof GeneralErrorBoundary>;

export const ActionError = {
  decorators: [
    (Story) => {
      const router = createMemoryRouter([
        {
          path: "/",
          element: <Story />,
          ErrorBoundary: GeneralErrorBoundary,
          action: () => {
            throw new Response("Unauthorised", {
              status: 401,
            });
          },
        },
      ]);

      return <RouterProvider router={router} />;
    },
  ],
  render: () => (
    <Form action="/" method="POST">
      <button type="submit">Submit</button>
    </Form>
  ),
} satisfies StoryObj<typeof GeneralErrorBoundary>;
