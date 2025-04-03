import React from "react";

const routes = [
  {
    path: "/",
    Component: React.lazy(() => import("./layouts")),
    children: [
      {
        id: "homepage",
        path: "/",
        Component: React.lazy(() => import("./pages/homepage")),
      },
      {
        id: "createpage",
        path: "create",
        Component: React.lazy(() => import("./pages/createpage")),
      },
      {
        id: "postpage",
        path: "pin/:id",
        Component: React.lazy(() => import("./pages/postpage")),
      },
      {
        id: "profile",
        path: "profile",
        Component: React.lazy(() => import("./pages/profilepage")),
      },
      {
        id: "searchpage",
        path: "search",
        Component: React.lazy(() => import("./pages/searchpage")),
      },
    ],
  },
  {
    id: "auth",
    path: "/auth",
    Component: React.lazy(() => import("./pages/auth")),
  },
];

export default routes;
