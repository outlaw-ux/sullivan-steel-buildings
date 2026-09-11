import type { MetadataRoute } from "next";
import { nav, site, siteWorkNav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = Array.from(
    new Set([
      "/",
      ...nav.map((n) => n.href),
      ...siteWorkNav.map((n) => n.href),
    ]),
  );
  return routes.map((path) => ({
    url: new URL(path, site.siteUrl).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
