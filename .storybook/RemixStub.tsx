import React from "react";
import { HydratedRouter } from "react-router/dom";

export function RemixStub({ children }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;
  win.__remixManifest = {
    routes: {
      "routes/$": {
        id: "routes/$",
        path: "*",
      },
    },
  };
  win.__remixRouteModules = {
    "routes/$": {
      default: () => children,
      // it doesn't update when switching to another story with an empty dependency array, hence the globalState plumbing
    },
  };
  win.__remixContext = {
    state: {},
    future: {},
  };

  return <HydratedRouter />;
}
