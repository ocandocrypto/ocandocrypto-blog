import { test } from "node:test"
import assert from "node:assert/strict"
import { isKnownRoute, prefersMarkdown, notFoundMarkdownBody } from "./agent-404.ts"

test("isKnownRoute recognizes real static pages", () => {
  assert.equal(isKnownRoute("/"), true)
  assert.equal(isKnownRoute("/about"), true)
  assert.equal(isKnownRoute("/learnings"), true)
  assert.equal(isKnownRoute("/projects"), true)
  assert.equal(isKnownRoute("/contact"), true)
  assert.equal(isKnownRoute("/privacy"), true)
})

test("isKnownRoute recognizes real learning posts", () => {
  assert.equal(isKnownRoute("/learnings/why-i-decided-to-learn-in-public"), true)
  assert.equal(isKnownRoute("/learnings/consistency-and-attention"), true)
})

test("isKnownRoute rejects paths that do not exist", () => {
  assert.equal(isKnownRoute("/does-not-exist"), false)
  assert.equal(isKnownRoute("/learnings/not-a-real-post"), false)
  assert.equal(isKnownRoute("/learnings/"), false)
})

test("prefersMarkdown is true only when markdown is requested without html", () => {
  assert.equal(prefersMarkdown("text/markdown"), true)
  assert.equal(prefersMarkdown("text/markdown, */*"), true)
})

test("prefersMarkdown is false for normal browser/HTML requests", () => {
  assert.equal(prefersMarkdown("text/html,application/xhtml+xml"), false)
  assert.equal(prefersMarkdown("text/html,text/markdown"), false)
  assert.equal(prefersMarkdown(""), false)
})

test("notFoundMarkdownBody points agents at recovery links", () => {
  const body = notFoundMarkdownBody()
  assert.match(body, /^# 404 Not Found/)
  assert.match(body, /sitemap\.xml/)
  assert.match(body, /llms\.txt/)
  assert.match(body, /\/learnings/)
})
