import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// House mark in the site's press-red / paper palette. iOS masks the corners,
// so the red is full-bleed and the mark keeps a generous margin.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ac3626",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 32 32">
          <path d="M16 4 3 14v13.5h26V14Z" fill="#f5efdd" />
          <rect x="13" y="18" width="6" height="9.5" fill="#ac3626" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
