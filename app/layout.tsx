import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mederiqa — Healthcare Intelligence",
    template: "%s | Mederiqa",
  },
  description:
    "AI・数理最適化・大規模言語モデルを活用し、医療現場の意思決定を支援するソフトウェアを開発しています。",
  keywords: [
    "Mederiqa",
    "Healthcare AI",
    "医療AI",
    "病床管理",
    "退院支援",
    "業務最適化",
  ],
  authors: [{ name: "Mederiqa" }],
  creator: "Mederiqa",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Mederiqa",
    title: "Mederiqa — Healthcare Intelligence",
    description: "医療に、問いを立て、知性で最適解を導く。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mederiqa — Healthcare Intelligence",
    description: "医療に、問いを立て、知性で最適解を導く。",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#eef2ed",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
