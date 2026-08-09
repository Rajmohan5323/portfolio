import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #d97706, #f59e0b)",
          borderRadius: 8,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          RM
        </span>
      </div>
    ),
    { ...size }
  );
}
