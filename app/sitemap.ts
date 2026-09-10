import type { MetadataRoute } from "next";

import { serviceAreas } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/dumpster-rentals",
    "/dumpster-rentals/15-yard",
    "/dumpster-rentals/20-yard",
    "/dumpster-rentals/30-yard",
    "/dumpster-rentals/contractors-developers",
    "/residential-dumpster-rental",
    "/construction-dumpster-rental",
    "/commercial-dumpster-rental",
    "/service-areas",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    ...serviceAreas.map((area) => area.href),
  ];

  return pages.map((path) => ({
    url: absoluteUrl(path),
    lastModified: "2026-08-29",
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
