import { useEffect, useState } from "react";

export type Route =
  | { name: "home"; anchor?: string }
  | { name: "work" }
  | { name: "project"; slug: string };

function parseHash(hash: string): Route {
  const h = hash.replace(/^#/, "");
  if (h.startsWith("/work")) {
    const rest = h.slice("/work".length).replace(/^\//, "");
    if (!rest) return { name: "work" };
    return { name: "project", slug: decodeURIComponent(rest) };
  }
  if (!h || h.startsWith("/")) return { name: "home" };
  return { name: "home", anchor: h };
}

export function routeKey(route: Route): string {
  if (route.name === "project") return `project:${route.slug}`;
  if (route.name === "work") return "work";
  return `home:${route.anchor ?? ""}`;
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? { name: "home" } : parseHash(window.location.hash)
  );

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}
