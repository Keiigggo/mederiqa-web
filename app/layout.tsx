import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Medenoa — Healthcare Intelligence",
    template: "%s | Medenoa",
  },
  description:
    "AI・数理最適化・大規模言語モデルを活用し、医療現場の意思決定を支援するソフトウェアを開発しています。",
  keywords: [
    "Medenoa",
    "Healthcare AI",
    "医療AI",
    "病床管理",
    "退院支援",
    "業務最適化",
  ],
  authors: [{ name: "Medenoa" }],
  creator: "Medenoa",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Medenoa",
    title: "Medenoa — Healthcare Intelligence",
    description: "人とAI・テクノロジーをつなぎ、医療の可能性を無限に拡張する。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medenoa — Healthcare Intelligence",
    description: "人とAI・テクノロジーをつなぎ、医療の可能性を無限に拡張する。",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f4f1",
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
