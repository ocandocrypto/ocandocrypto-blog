import type { MetadataRoute } from "next"
import { SITE_URL, LEARNING_SLUGS } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/learnings`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ]

  const postRoutes: MetadataRoute.Sitemap = LEARNING_SLUGS.map((slug) => ({
    url: `${SITE_URL}/learnings/${slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  return [...staticRoutes, ...postRoutes]
}
