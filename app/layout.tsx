import type { Metadata, Viewport as NextViewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ConstellationCanvas } from "@/components/constellation/ConstellationCanvas";
import { getBuildInfo } from "@/lib/build-info";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "fairulmuhammad | Software Engineer",
    template: "%s | Fairul",
  },
  description:
    "Software engineer exploring web development, infrastructure, and everything in between. Based in Yogyakarta, Indonesia.",
  keywords: [
    "software engineer",
    "laravel",
    "php",
    "devops",
    "infrastructure",
    "typescript",
    "react",
    "docker",
    "fairul",
  ],
  authors: [{ name: "Fairul" }],
  creator: "Fairul",
  publisher: "Fairul",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fairulmuhammad.vercel.app",
    siteName: "Fairul | Software Engineer",
    title: "Fairul | Software Engineer",
    description:
      "Software engineer exploring web development, infrastructure, and everything in between.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fairul Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairul | Software Engineer",
    description:
      "Software engineer exploring web development, infrastructure, and everything in between.",
  },
  metadataBase: new URL("https://fairulmuhammad.vercel.app"),
};

export const viewport: NextViewport = {
  themeColor: "#07070d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const buildInfo = getBuildInfo();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-dark-900 text-gray-200 antialiased">
        <LanguageProvider>
          <ConstellationCanvas />
          <SiteLayout buildInfo={buildInfo}>
            {children}
          </SiteLayout>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
