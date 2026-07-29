import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://raj-mohan-portfolio.vercel.app/",
      lastModified: new Date("2026-07-29"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
