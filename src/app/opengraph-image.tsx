import { ImageResponse } from "next/og";

export const alt = "AI Council Toolkit";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              color: "white",
              fontWeight: 700,
            }}
          >
            AI
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
            }}
          >
            Open Source Playbook
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          AI Council Toolkit
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Templates, governance patterns, and operating models for building an
          internal AI Council.
        </div>
      </div>
    ),
    { ...size },
  );
}
