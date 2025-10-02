import Link from "next/link"
import { LayoutWrapper } from "@/components/layout-wrapper"

// Mock data - replace with your actual blog posts
const recentPosts = [
  {
    slug: "learning-nextjs-app-router",
    title: "Learning Next.js App Router",
    date: "2025-02-08",
    excerpt: "My journey diving deep into the Next.js App Router and understanding server components...",
  },
  {
    slug: "building-my-first-saas",
    title: "Building My First SaaS Product",
    date: "2025-02-01",
    excerpt: "Starting a new project to build a SaaS product from scratch. Here's what I learned in week one...",
  },
  {
    slug: "why-i-started-building-in-public",
    title: "Why I Started Building in Public",
    date: "2025-01-25",
    excerpt: "Sharing my thoughts on why transparency and public learning matter in software development...",
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
          I’m Angela O (@ocandocrypto) — welcome to my public learning journal.  
          </p>
           <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
           Here I share what I learn about <strong>artificial intelligence</strong>, <strong>blockchain</strong>, 
           and their intersection with <strong>economics</strong> — and, honestly, just life in general.  
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
          <div className="space-y-10">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group">
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
