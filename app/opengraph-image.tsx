import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Learning in Public — ocandocrypto"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 64, fontStyle: "italic", display: "flex" }}>Learning in Public</div>
        <div style={{ fontSize: 28, color: "#a1a1a1", marginTop: 24, display: "flex" }}>
          AI, DeFi &amp; Economics learnings — Angela O (@ocandocrypto)
        </div>
      </div>
    ),
    { ...size },
  )
}
