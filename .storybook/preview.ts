import type { Loader, Preview } from "@storybook/react";
// import type { LinkDescriptor } from "@remix-run/node";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
import { withRouter } from "storybook-addon-react-router-v6";
// import { initialize, mswLoader } from "msw-storybook-addon";

// import { setupWorker, rest } from "msw";
// import { links } from "../app/root";
import "../app/tailwind.css";

// const loaders: Loader[] = [() => linksLoader(links())];

// async function linksLoader(links: LinkDescriptor[]) {
//   const loadedLinks: LinkDescriptor[] = [];

//   const head = document.head;
//   links.forEach((link) => {
//     const element = document.createElement("link");
//     // @ts-ignore
//     for (const [key, value] of Object.entries(link)) element[key] = value;
//     element.onload = () => loadedLinks.push(link);
//     head.appendChild(element);
//   });
//   await waitFor(() => loadedLinks.length === links.length);
//   return {};
// }

// async function waitFor(condition: () => boolean, times = 100): Promise<null> {
//   if (!condition() && times > 0) {
//     await new Promise(requestAnimationFrame);
//     return await waitFor(condition, --times);
//   } else {
//     return Promise.resolve(null);
//   }
// }

// const worker = setupWorker(
//   rest.get("/app/routes/posts._index.tsx", (req, res, ctx) => {
//     console.log("Posts Index");
//     console.log(res);
//     return res(
//       // Respond with a 200 status code
//       ctx.json({
//         slug: "/firstPost",
//         title: "First Post",
//         markdown: "##Title",
//       })
//     );
//   })
// );

// worker.start();
// worker.printHandlers();

// Initialize MSW
// initialize({
//   onUnhandledRequest: (req) => {
//     console.log(req);
//     if (req.url.pathname.startsWith("/app/routes")) {
//       console.log(`Unhandled ${req.method} request to ${req.url.href}.

//         This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.

//         If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
//       `);
//     }
//   },
// });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // loaders: loaders,
  // Provide the MSW addon loader globally
  // loaders: [mswLoader],
};

export default preview;

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
  withRouter,
];
