import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/caseStudies";
import { nav, siteUrl } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = nav.map((n) => n.href);
  const studies = caseStudies.map((c) => `/case-studies/${c.slug}`);
  return [...pages, ...studies].map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/case-studies/") ? 0.8 : 0.7,
  }));
}
