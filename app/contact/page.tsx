import { LayoutWrapper } from "@/components/layout-wrapper"
import Link from "next/link"

export const metadata = {
  title: "Contact — Learning in Public",
  description: "How to reach Angela O (@ocandocrypto).",
}

export const dynamic = "force-dynamic"

export default function ContactPage() {
  return (
    <LayoutWrapper>
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif italic">Contact</h1>

          <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
            <p className="text-foreground">
              The best way to reach me is through my public profiles below. I read and
              reply to messages on X and LinkedIn.
            </p>
            <p className="text-muted-foreground">
              If it's something code-related, a bug in this site, a question about a
              project, or a pull request, opening an issue or PR on GitHub works best.
              But feel free to reach out to me on my social media accounts too.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-serif">Reach me here</h2>
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <Link href="https://github.com/ocandocrypto" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://x.com/ocandocrypto" className="hover:text-foreground transition-colors">
              X / Twitter
            </Link>
            <Link href="https://www.linkedin.com/in/angelaocando/" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
