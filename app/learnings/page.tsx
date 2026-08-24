import Link from "next/link"
import { LayoutWrapper } from "@/components/layout-wrapper"

// Mock data - replace with your actual blog posts
const allPosts = [
  {
    slug: "authenticity-and-worthiness-as-resistance",
    title: "Authenticity and Worthiness as Resistance",
    date: "2026-05-07",
    excerpt: "Una pequeña reflexión sobre vulnerabilidad, conversaciones difíciles, relaciones cultivadas con intención y la decisión diaria de esperar lo mejor de los demás.",
  },
  {
    slug: "consistency-and-attention",
    title: "Consistency and Attention",
    date: "2025-12-25",
    excerpt: "Reflexiones sobre la consistencia y atención. Un autoanálisis sobre por qué me cuesta mantener hábitos cuando no hay urgencia, y cómo la atención se ha convertido en una de mis nuevas obsesiones y forma de rebeldía en esta nueva era.",
  },
  {
    slug: "why-i-decided-to-learn-in-public",
    title: "Why I Decided to Learn in Public",
    date: "2025-10-02",
    excerpt: "I used to write endless goals but kept delaying them. Quitting social media reminded me to stay curious, keep learning, and rebuild my focus. This journal keeps me accountable.  ",
  },
  
]

export const dynamic = "force-dynamic"

export default function LearningsPage() {
  return (
    <LayoutWrapper>
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif italic">Learnings</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A journal of experiments, mistakes, and insights as I explore code, AI, blockchain and economics.
          </p>
        </div>

        <div className="space-y-10">
          {allPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/learnings/${post.slug}`} className="block space-y-2">
                <time className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-2xl font-serif group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
