import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { markdownContent } from "@/lib/markdown-content"
import { isKnownRoute, notFoundMarkdownBody, prefersMarkdown } from "@/lib/agent-404"

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") || ""
  const pathname = request.nextUrl.pathname
  const wantsMarkdown = prefersMarkdown(accept)

  if (wantsMarkdown) {
    const content = markdownContent[pathname]
    if (content) {
      return new NextResponse(content, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          Vary: "Accept, Accept-Encoding",
        },
      })
    }

    if (!isKnownRoute(pathname)) {
      return new NextResponse(notFoundMarkdownBody(), {
        status: 404,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          Vary: "Accept, Accept-Encoding",
        },
      })
    }
  }

  const response = NextResponse.next()
  response.headers.set("Vary", "Accept, Accept-Encoding")
  return response
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
