import type React from "react"
import { Navigation } from "./navigation"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-12 lg:gap-20">
          {/* Sidebar Navigation */}
          <aside className="md:sticky md:top-20 md:self-start">
            <Navigation />
          </aside>

          {/* Main Content */}
          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  )
}
