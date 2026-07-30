import { ImageResponse } from "next/og";

export const socialImageAlt = "Medenoa — Healthcare Intelligence";
export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 78% 38%, #d9f7ee 0%, #f4f4f1 32%, #ecece7 100%)",
          color: "#080808",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "80px 92px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 760,
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Medenoa
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Healthcare Intelligence
          </div>
          <div
            style={{
              color: "#4d5552",
              display: "flex",
              fontSize: 25,
              letterSpacing: "0.04em",
            }}
          >
            Human × Intelligence × Healthcare
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "#080808",
            borderRadius: 999,
            color: "#ffffff",
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            height: 250,
            justifyContent: "center",
            letterSpacing: "-0.08em",
            width: 250,
          }}
        >
          M
        </div>
      </div>
    ),
    socialImageSize,
  );
}
