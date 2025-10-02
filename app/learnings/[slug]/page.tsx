import { LayoutWrapper } from "@/components/layout-wrapper"
import Link from "next/link"

const posts: Record<string, any> = {
  "why-i-decided-to-learn-in-public": {
    title: "Why I Decided to Learn in Public",
    date: "2025-10-02",
    content: `
Like many of you, I’ve written down lots of goals in my journal.  
And like many of you, I’ve also delayed them with the usual excuse: “my life is too busy” or “I don’t have time.”  

A few weeks ago, I decided to stop using social media for just one week. At first, it felt hard — I was angry, restless, and always wanting to check my phone because I was afraid of “losing touch with my friends.” But the truth was simpler: I was wasting hours just scrolling.  

That week showed me how much I could actually do with my time. What I really needed wasn’t more hours, but more focus and commitment.  

Looking back, the things that have helped me grow the most are:  
- Using what I learn in practice.  
- Sharing what I learn — in my journal or with friends.  
- Strong discipline and obsession when I want to learn something new or just achieve something.  

So this blog is my way to commit to myself:  
- To practice my coding and “vibe code” skills.  
- To share some thoughts and learnings along the way.  
- To keep myself accountable to the goals I care about.  

My goals right now? Stay away from endless social media, go back to coding, learn more about AI engineering, keep studying DeFi and economics, and hopefully apply new lessons to my daily life. Some things will help me grow, and some may fail — but both will teach me something.  

And.. well, this is the first draft of my journey. 

- Angela O.
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return (
      <LayoutWrapper>
        <div className="space-y-6">
          <h1 className="text-4xl font-serif italic">Post not found</h1>
          <Link href="/learnings" className="text-muted-foreground hover:text-foreground">
            ← Back to learnings
          </Link>
        </div>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      <article className="space-y-8">
        <div className="space-y-4">
          <Link
            href="/learnings"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
          >
            ← Back to learnings
          </Link>

          <div className="space-y-2">
            <time className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-serif italic text-balance">{post.title}</h1>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content.split("\n").map((paragraph: string, index: number) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-serif mt-12 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              )
            }
            if (paragraph.trim().match(/^\d+\./)) {
              return (
                <li key={index} className="ml-6 leading-relaxed text-muted-foreground">
                  {paragraph.replace(/^\d+\.\s*/, "")}
                </li>
              )
            }
            if (paragraph.trim()) {
              return (
                <p key={index} className="leading-relaxed text-foreground mb-6">
                  {paragraph}
                </p>
              )
            }
            return null
          })}
        </div>
      </article>
    </LayoutWrapper>
  )
}
