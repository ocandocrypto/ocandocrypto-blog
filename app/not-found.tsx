import Link from "next/link"
import { LayoutWrapper } from "@/components/layout-wrapper"

export default function NotFound() {
  return (
    <LayoutWrapper>
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif italic">404 — Not found</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          There's nothing at this path. Here's where to look instead:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/learnings" className="hover:text-foreground transition-colors underline">
              Learnings — all posts
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-foreground transition-colors underline">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-foreground transition-colors underline">
              About
            </Link>
          </li>
          <li>
            <a href="/sitemap.xml" className="hover:text-foreground transition-colors underline">
              Sitemap
            </a>
          </li>
          <li>
            <a href="/llms.txt" className="hover:text-foreground transition-colors underline">
              llms.txt
            </a>
          </li>
        </ul>
      </div>
    </LayoutWrapper>
  )
}
