"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "home" },
  { href: "/learnings", label: "learnings" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-lg transition-colors ${
              isActive
                ? "text-foreground font-serif italic"
                : "text-muted-foreground hover:text-foreground font-serif italic"
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
