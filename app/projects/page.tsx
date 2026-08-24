import { LayoutWrapper } from "@/components/layout-wrapper"

const projects = [
  {
    title: "Soon to be added...",
    description: "I’ll be sharing projects I’m working on here: from AI experiments to DeFi tools and small coding adventures.",
    status: "Coming Soon",
    link: "#",
    tags: ["AI", "DeFi", "Economics"],
  }
]

export const dynamic = "force-dynamic"

export default function ProjectsPage() {
  return (
    <LayoutWrapper>
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif italic">Projects</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Things I'm building, experimenting with, and learning from. All in various stages of completion.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <article key={index} className="space-y-3 group">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-serif group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h2>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{project.status}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
