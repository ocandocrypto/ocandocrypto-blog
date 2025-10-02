import { LayoutWrapper } from "@/components/layout-wrapper"
import Link from "next/link"

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <div className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif italic">About</h1>

          <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
            <p className="text-foreground">
            Hey, I’m Angela (@ocandocrypto) — I’ve been working in tech and crypto for the past 5 years.  
            From leading one of the biggest blockchain education projects at Platzi, to joining ETHGlobal hackathons around the world as a hacker, mentor, and speaker, and now working on improving developer journeys and experiences as a Developer Community Manager at the Uniswap Foundation.  
            </p>

            <p className="text-muted-foreground">
              Learning has always been what drives me. With so much happening in blockchain, AI, 
    and economics, this blog is my public learning journal — a space where I document experiments, 
    share mistakes and small wins, and reflect on the process of staying curious and disciplined.
            </p>
</div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-serif">Connect</h2>
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <Link href="https://github.com/ocandocrypto" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://x.com/ocandocrypto" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="https://www.linkedin.com/in/angelaocando/" className="hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href="https://t.me/ocandocrypto" className="hover:text-foreground transition-colors">
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}