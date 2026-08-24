import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { markdownContent } from "@/lib/markdown-content"

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") || ""
  const wantsMarkdown = accept.includes("text/markdown") && !accept.includes("text/html")

  if (wantsMarkdown) {
    const content = markdownContent[request.nextUrl.pathname]
    if (content) {
      return new NextResponse(content, {
        status: 200,
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
