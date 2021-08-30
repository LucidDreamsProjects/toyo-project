import { createRouter, InferRouteRef, route } from "@switcher/preact";

export const appRoutes = [
  route("home", "/"),

  route("secret-panel", "/secret-panel"),

  route("new-page", "/new-page"),

  route(
    "example",
    (params: { paramEx: string }) => `/example/${params.paramEx}`
  ),
];

export const {
  buildHref,
  useRouter,
  RouterContext,
  RouterLink,
  resolveLocation,
  refToLocation,
} = createRouter(appRoutes);

export type AppRouteRef = InferRouteRef<typeof appRoutes>;
