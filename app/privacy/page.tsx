import { LayoutWrapper } from "@/components/layout-wrapper"
import Link from "next/link"

export const metadata = {
  title: "Privacy — Learning in Public",
  description: "What data this site does and does not collect.",
}

export const dynamic = "force-dynamic"

export default function PrivacyPage() {
  return (
    <LayoutWrapper>
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif italic">Privacy</h1>

          <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
            <p className="text-foreground">
              This site is a personal blog. It does not require an account, does not
              sell data to anyone, and does not run advertising of any kind.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-serif">Analytics</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            This site uses{" "}
            <Link href="https://vercel.com/analytics" className="underline hover:text-foreground transition-colors">
              Vercel Analytics
            </Link>{" "}
            to understand aggregate traffic, such as page views and referrers. Vercel
            Analytics is cookie-free and does not track individuals across sites or
            build a profile of any single visitor.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-serif">What this site does not collect</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            There are no forms on this site that collect personal data. There is no
            login, no email capture, no comments system, and no third-party tracking
            pixels or ad networks.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-serif">Questions</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            If you have a question about this policy, reach out through any of the
            channels listed on the{" "}
            <Link href="/contact" className="underline hover:text-foreground transition-colors">
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </LayoutWrapper>
  )
}
