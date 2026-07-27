import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

const siteDescription =
  "メデノア（Medenoa）は、AI・数理最適化・大規模言語モデルを活用し、医療現場の意思決定を支援するソフトウェアを開発しています。";

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "メデノア",
  alternateName: "Medenoa",
  url: "https://medenoa.jp",
  email: "contact@medenoa.jp",
  description: siteDescription,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://medenoa.jp"),
  title: {
    default: "メデノア | Medenoa — Healthcare Intelligence",
    template: "%s | メデノア",
  },
  description: siteDescription,
  keywords: [
    "メデノア",
    "Medenoa",
    "Healthcare AI",
    "医療AI",
    "病床管理",
    "退院支援",
    "業務最適化",
  ],
  authors: [{ name: "メデノア" }],
  creator: "メデノア",
  publisher: "メデノア",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "メデノア | Medenoa",
    title: "メデノア | Medenoa — Healthcare Intelligence",
    description: "人とAI・テクノロジーをつなぎ、医療の可能性をひろげます。",
  },
  twitter: {
    card: "summary_large_image",
    title: "メデノア | Medenoa — Healthcare Intelligence",
    description: "人とAI・テクノロジーをつなぎ、医療の可能性をひろげます。",
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}
