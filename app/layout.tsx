import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { GoogleTag } from "@/components/google-tag"
import { SITE_URL, SITE_AUTHOR, SOCIAL_LINKS } from "@/lib/site"
import "./globals.css"

const crimsonText = Crimson_Text({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const title = "Learning in Public: AI, DeFi & Economics learnings."
const description = "My journey of building, learning, and sharing"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_AUTHOR,
  alternateName: "ocandocrypto",
  url: SITE_URL,
  description,
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.twitter, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.telegram],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${crimsonText.variable}`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <GoogleTag />
        <Analytics />
      </body>
    </html>
  )
}
