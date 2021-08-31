import { createRouter, route } from "@switcher/preact";

export const appRoutes = [
  route("home", "/"),

  route("secret-panel", "/secret-panel"),

  route("function-references", "/function-references"),

  /* route(
    "example",
    (params: { paramEx }) => `/example/${params.paramEx}`
  ), */
];

export const {
  buildHref,
  useRouter,
  RouterContext,
  RouterLink,
  resolveLocation,
  refToLocation,
} = createRouter(appRoutes);
