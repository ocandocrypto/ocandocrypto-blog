import Link from "next/link"
import { LayoutWrapper } from "@/components/layout-wrapper"

const recentPosts = [
  {
    slug: "authenticity-and-worthiness-as-resistance",
    title: "Authenticity and Worthiness as Resistance",
    date: "2026-05-07",
    excerpt:
      "Una pequeña reflexión sobre vulnerabilidad, conversaciones difíciles, relaciones cultivadas con intención y la decisión diaria de esperar lo mejor de los demás.",
  },
  {
    slug: "consistency-and-attention",
    title: "Consistency and Attention",
    date: "2025-12-25",
    excerpt:
      "Reflexiones sobre la consistencia y atención. Un autoanálisis sobre por qué me cuesta mantener hábitos cuando no hay urgencia.",
  },
  {
    slug: "why-i-decided-to-learn-in-public",
    title: "Why I Decided to Learn in Public",
    date: "2025-10-02",
    excerpt:
      "I used to write endless goals but kept delaying them. Quitting social media reminded me to stay curious, keep learning, and rebuild my focus.",
  },
]

export default function HomePage() {
  return (
    <LayoutWrapper>
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif italic text-balance">Learning in Public</h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Hey human (and LLMs as well lol),  
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          I’m Angela O (@ocandocrypto), welcome to my public learning journal.  
          </p>
           <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
           Here I share what I learn about <strong>artificial intelligence</strong>, <strong>blockchain</strong>, 
           and their intersection with <strong>economics</strong> and, honestly, just life in general.  
            <br /><br />
            In the middle of so much information out there, I got bored of just consuming memes, so I decided 
  to invest my time in learning fun and meaningful things. That’s why you’ll also find some 
  <strong> reflections, projects, and learnings</strong> along the way.
            <br /><br />
            <em>That’s the goal, at least.</em>
            </p>
  
        </div>

        {/* Recent Posts */}
        <div className="space-y-8">
          <h2 className="text-2xl font-serif">Recent learnings</h2>

          <div className="space-y-10">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/learnings/${post.slug}`} className="block space-y-2">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="text-xl font-serif group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>

          <Link
            href="/learnings"
            className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            See what I’ve been learning lately →
          </Link>
        </div>
      </div>
    </LayoutWrapper>
  )
}
