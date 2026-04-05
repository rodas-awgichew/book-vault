import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import Root from "../routes/root";
import Home from "../routes/index";
import Browse from "../routes/browse";
import Vault from "../routes/vault";

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const browseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/browse",
  component: Browse,
});

const vaultRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/vault",
  component: Vault,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    indexRoute,
    browseRoute,
    vaultRoute,
  ]),
});