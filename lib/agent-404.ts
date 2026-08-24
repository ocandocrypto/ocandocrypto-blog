import { markdownContent } from "./markdown-content.ts"
import { LEARNING_SLUGS, SITE_URL } from "./site.ts"

const KNOWN_STATIC_PATHS = new Set(Object.keys(markdownContent))
const LEARNING_POST_PATTERN = /^\/learnings\/([^/]+)$/

export function isKnownRoute(pathname: string): boolean {
  if (KNOWN_STATIC_PATHS.has(pathname)) return true

  const match = pathname.match(LEARNING_POST_PATTERN)
  if (match) return LEARNING_SLUGS.includes(match[1])

  return false
}

export function prefersMarkdown(acceptHeader: string): boolean {
  return acceptHeader.includes("text/markdown") && !acceptHeader.includes("text/html")
}

export function notFoundMarkdownBody(): string {
  return `# 404 Not Found

There's nothing at this path. Here's where to look instead:

- Sitemap: ${SITE_URL}/sitemap.xml
- llms.txt: ${SITE_URL}/llms.txt
- Home: ${SITE_URL}/
- Learnings: ${SITE_URL}/learnings
- Projects: ${SITE_URL}/projects
- About: ${SITE_URL}/about
- Contact: ${SITE_URL}/contact
`
}
